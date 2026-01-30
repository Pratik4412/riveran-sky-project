import transporter from "../config/mailConfig.js";
import bookingModel from "../models/booking.model.js";

export const bookRoom = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      checkIn,
      checkOut,
      adults,
      children,
    } = req.body;

    // ✅ Validation
    if (!firstName || !lastName || !email || !phone || !checkIn || !checkOut) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // 🔍 Check availability
    const existingBooking = await bookingModel.findOne({
      checkIn: { $lt: new Date(checkOut) },
      checkOut: { $gt: new Date(checkIn) },
    });

    // ❌ Room not available → EMAIL TO USER
    if (existingBooking) {
      await transporter.sendMail({
        from: `"Hotel Booking" <${process.env.MAIL_USER}>`,
        to: email,
        subject: "Room Unavailable - Alternative Dates Available",
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="margin: 0; padding: 0; font-family: 'Arial', 'Helvetica', sans-serif; background-color: #f5f5f5;">
            <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f5f5f5;">
              <tr>
                <td style="padding: 0;">
                  <!-- Header -->
                  <table role="presentation" style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #dc3545;">
                    <tr>
                      <td style="padding: 30px 20px; text-align: center;">
                        <h1 style="color: #ffffff; margin: 0; font-size: 26px; font-weight: 600;">Hotel Booking</h1>
                      </td>
                    </tr>
                  </table>

                  <!-- Main Content -->
                  <table role="presentation" style="width: 100%; max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                    <tr>
                      <td style="padding: 40px 30px;">
                        <div style="text-align: center; margin-bottom: 30px;">
                          <div style="font-size: 60px; margin-bottom: 15px;">😔</div>
                          <h2 style="color: #dc3545; margin: 0 0 10px 0; font-size: 24px; font-weight: 600;">Room Not Available</h2>
                        </div>

                        <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                          Dear <strong>${firstName} ${lastName}</strong>,
                        </p>

                        <p style="color: #555555; font-size: 15px; line-height: 1.6; margin: 0 0 25px 0;">
                          Thank you for your interest in booking with us. Unfortunately, our rooms are already booked for your selected dates.
                        </p>

                        <!-- Booking Details Box -->
                        <table role="presentation" style="width: 100%; background-color: #fff5f5; border-left: 4px solid #dc3545; border-radius: 4px; margin: 25px 0;">
                          <tr>
                            <td style="padding: 20px;">
                              <h3 style="color: #dc3545; margin: 0 0 15px 0; font-size: 16px; font-weight: 600; text-transform: uppercase;">Requested Dates</h3>
                              <table style="width: 100%; border-collapse: collapse;">
                                <tr>
                                  <td style="padding: 8px 0; color: #666666; font-size: 14px; font-weight: 600;">Check-In:</td>
                                  <td style="padding: 8px 0; color: #333333; font-size: 15px; text-align: right;">${new Date(checkIn).toLocaleDateString("en-US", { weekday: "short", year: "numeric", month: "short", day: "numeric" })}</td>
                                </tr>
                                <tr>
                                  <td style="padding: 8px 0; color: #666666; font-size: 14px; font-weight: 600;">Check-Out:</td>
                                  <td style="padding: 8px 0; color: #333333; font-size: 15px; text-align: right;">${new Date(checkOut).toLocaleDateString("en-US", { weekday: "short", year: "numeric", month: "short", day: "numeric" })}</td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>

                        <p style="color: #555555; font-size: 15px; line-height: 1.6; margin: 25px 0;">
                          We'd love to accommodate you on alternative dates. Please check our availability or contact us directly for assistance.
                        </p>

                       

                        <p style="color: #777777; font-size: 14px; line-height: 1.5; margin: 20px 0 0 0; text-align: center;">
                          We appreciate your interest and hope to serve you soon!
                        </p>
                      </td>
                    </tr>
                  </table>

                  <!-- Footer -->
                  <table role="presentation" style="width: 100%; max-width: 600px; margin: 20px auto;">
                    <tr>
                      <td style="padding: 20px; text-align: center; background-color: #2c3e50; border-radius: 8px;">
                        <p style="color: #bdc3c7; font-size: 14px; margin: 0 0 8px 0;">
                          Need help? Contact us at <a href="mailto:${process.env.MAIL_USER}" style="color: #3498db; text-decoration: none;">${process.env.MAIL_USER}</a>
                        </p>
                        <p style="color: #95a5a6; font-size: 12px; margin: 0;">
                          © ${new Date().getFullYear()} Hotel Booking. All rights reserved.
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
          </html>
        `,
      });
      //  <!-- CTA Button -->
      //                         <div style="text-align: center; margin: 30px 0;">
      //                           <a href="${process.env.WEBSITE_URL || "#"}" style="display: inline-block; padding: 14px 35px; background-color: #007bff; color: #ffffff; text-decoration: none; border-radius: 5px; font-size: 16px; font-weight: 600;">
      //                             Check Available Dates
      //                           </a>
      //                         </div>
      return res.status(409).json({
        success: false,
        message: "Room not available",
      });
    }

    // ✅ Save booking
    const booking = await bookingModel.create({
      firstName,
      lastName,
      email,
      phone,
      checkIn,
      checkOut,
      adults,
      children,
    });

    const bookingId = booking._id.toString().slice(-8).toUpperCase();

    // 🏨 1️⃣ EMAIL TO HOTEL (BOOKING ENQUIRY)
    await transporter.sendMail({
      from: `"Booking Enquiry" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER, // HOTEL EMAIL
      subject: `📩 New Booking Enquiry - ${firstName} ${lastName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Arial', 'Helvetica', sans-serif; background-color: #f5f5f5;">
          <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f5f5f5;">
            <tr>
              <td style="padding: 0;">
                <!-- Header -->
                <table role="presentation" style="width: 100%; max-width: 650px; margin: 0 auto; background-color: #17a2b8;">
                  <tr>
                    <td style="padding: 25px 20px; text-align: center;">
                      <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">🔔 New Booking Enquiry</h1>
                    </td>
                  </tr>
                </table>

                <!-- Main Content -->
                <table role="presentation" style="width: 100%; max-width: 650px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                  <tr>
                    <td style="padding: 35px 30px;">
                      <div style="background-color: #d1ecf1; border-left: 4px solid #17a2b8; padding: 15px; margin-bottom: 25px; border-radius: 4px;">
                        <p style="color: #0c5460; margin: 0; font-size: 14px; font-weight: 600;">
                          ⚡ Action Required: New booking enquiry received
                        </p>
                      </div>

                      <h2 style="color: #2c3e50; margin: 0 0 25px 0; font-size: 20px; font-weight: 600;">Guest Information</h2>

                      <!-- Guest Details Table -->
                      <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                        <tr style="background-color: #f8f9fa;">
                          <td style="padding: 12px 15px; border-bottom: 1px solid #e9ecef; color: #666666; font-size: 14px; font-weight: 600; width: 35%;">Booking ID:</td>
                          <td style="padding: 12px 15px; border-bottom: 1px solid #e9ecef; color: #2c3e50; font-size: 15px; font-weight: 700;">#${bookingId}</td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 15px; border-bottom: 1px solid #e9ecef; color: #666666; font-size: 14px; font-weight: 600;">Guest Name:</td>
                          <td style="padding: 12px 15px; border-bottom: 1px solid #e9ecef; color: #2c3e50; font-size: 15px;">${firstName} ${lastName}</td>
                        </tr>
                        <tr style="background-color: #f8f9fa;">
                          <td style="padding: 12px 15px; border-bottom: 1px solid #e9ecef; color: #666666; font-size: 14px; font-weight: 600;">Email:</td>
                          <td style="padding: 12px 15px; border-bottom: 1px solid #e9ecef; color: #2c3e50; font-size: 15px;"><a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${email}</a></td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 15px; border-bottom: 1px solid #e9ecef; color: #666666; font-size: 14px; font-weight: 600;">Phone:</td>
                          <td style="padding: 12px 15px; border-bottom: 1px solid #e9ecef; color: #2c3e50; font-size: 15px;"><a href="tel:${phone}" style="color: #007bff; text-decoration: none;">${phone}</a></td>
                        </tr>
                      </table>

                      <h2 style="color: #2c3e50; margin: 0 0 25px 0; font-size: 20px; font-weight: 600;">Booking Details</h2>

                      <!-- Booking Details Table -->
                      <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
                        <tr style="background-color: #f8f9fa;">
                          <td style="padding: 12px 15px; border-bottom: 1px solid #e9ecef; color: #666666; font-size: 14px; font-weight: 600; width: 35%;">Check-In:</td>
                          <td style="padding: 12px 15px; border-bottom: 1px solid #e9ecef; color: #2c3e50; font-size: 15px; font-weight: 600;">${new Date(checkIn).toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 15px; border-bottom: 1px solid #e9ecef; color: #666666; font-size: 14px; font-weight: 600;">Check-Out:</td>
                          <td style="padding: 12px 15px; border-bottom: 1px solid #e9ecef; color: #2c3e50; font-size: 15px; font-weight: 600;">${new Date(checkOut).toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</td>
                        </tr>
                        <tr style="background-color: #f8f9fa;">
                          <td style="padding: 12px 15px; border-bottom: 1px solid #e9ecef; color: #666666; font-size: 14px; font-weight: 600;">Adults:</td>
                          <td style="padding: 12px 15px; border-bottom: 1px solid #e9ecef; color: #2c3e50; font-size: 15px;">${adults || 0}</td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 15px; color: #666666; font-size: 14px; font-weight: 600;">Children:</td>
                          <td style="padding: 12px 15px; color: #2c3e50; font-size: 15px;">${children || 0}</td>
                        </tr>
                      </table>

                      <!-- Duration Info -->
                      <div style="background-color: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; margin: 20px 0; border-radius: 4px;">
                        <p style="color: #856404; margin: 0; font-size: 14px;">
                          <strong>📅 Total Duration:</strong> ${Math.ceil((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24))} night(s)
                        </p>
                      </div>

                      <p style="color: #666666; font-size: 14px; margin: 25px 0 0 0; text-align: center;">
                        Received on: ${new Date().toLocaleString("en-US", { dateStyle: "full", timeStyle: "short" })}
                      </p>
                    </td>
                  </tr>
                </table>

                <!-- Footer -->
                <table role="presentation" style="width: 100%; max-width: 650px; margin: 20px auto;">
                  <tr>
                    <td style="padding: 20px; text-align: center; background-color: #2c3e50; border-radius: 8px;">
                      <p style="color: #95a5a6; font-size: 12px; margin: 0;">
                        This is an automated notification from your booking system
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    // 👤 2️⃣ EMAIL TO USER (CONFIRMATION)
    await transporter.sendMail({
      from: `"Hotel Booking" <${process.env.MAIL_USER}>`,
      to: email,
      subject: "🎉 Booking Confirmed - Your Stay Awaits!",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Arial', 'Helvetica', sans-serif; background-color: #f5f5f5;">
          <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f5f5f5;">
            <tr>
              <td style="padding: 0;">
                <!-- Header -->
                <table role="presentation" style="width: 100%; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
                  <tr>
                    <td style="padding: 35px 20px; text-align: center;">
                      <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700; letter-spacing: 0.5px;">Hotel Booking</h1>
                    </td>
                  </tr>
                </table>

                <!-- Main Content -->
                <table role="presentation" style="width: 100%; max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0 6px 12px rgba(0,0,0,0.15);">
                  <tr>
                    <td style="padding: 45px 35px;">
                      <!-- Success Icon -->
                      <div style="text-align: center; margin-bottom: 30px;">
                        <div style="display: inline-block; background-color: #d4edda; border-radius: 50%; width: 80px; height: 80px; line-height: 80px; margin-bottom: 20px;">
                          <span style="font-size: 48px;">✓</span>
                        </div>
                        <h2 style="color: #28a745; margin: 0 0 10px 0; font-size: 28px; font-weight: 700;">Booking Confirmed!</h2>
                        <p style="color: #666666; font-size: 15px; margin: 0;">Your reservation has been successfully confirmed</p>
                      </div>

                      <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0 0 25px 0;">
                        Dear <strong>${firstName} ${lastName}</strong>,
                      </p>

                      <p style="color: #555555; font-size: 15px; line-height: 1.7; margin: 0 0 30px 0;">
                        Thank you for choosing us! We're delighted to confirm your booking and look forward to welcoming you. Your comfort and satisfaction are our top priorities.
                      </p>

                      <!-- Booking ID Badge -->
                      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 8px; margin-bottom: 30px; text-align: center;">
                        <p style="color: #ffffff; margin: 0 0 8px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; opacity: 0.9;">Your Booking ID</p>
                        <p style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700; letter-spacing: 2px;">#${bookingId}</p>
                      </div>

                      <!-- Reservation Details -->
                      <div style="background-color: #f8f9fa; border-radius: 8px; padding: 25px; margin-bottom: 30px;">
                        <h3 style="color: #2c3e50; margin: 0 0 20px 0; font-size: 18px; font-weight: 600; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Reservation Details</h3>
                        
                        <table role="presentation" style="width: 100%; border-collapse: collapse;">
                          <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef;">
                              <div style="color: #666666; font-size: 13px; margin-bottom: 3px; text-transform: uppercase; letter-spacing: 0.5px;">Check-In</div>
                              <div style="color: #2c3e50; font-size: 16px; font-weight: 600;">${new Date(checkIn).toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</div>
                              <div style="color: #888888; font-size: 13px; margin-top: 3px;">After 2:00 PM</div>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef;">
                              <div style="color: #666666; font-size: 13px; margin-bottom: 3px; text-transform: uppercase; letter-spacing: 0.5px;">Check-Out</div>
                              <div style="color: #2c3e50; font-size: 16px; font-weight: 600;">${new Date(checkOut).toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</div>
                              <div style="color: #888888; font-size: 13px; margin-top: 3px;">Before 11:00 AM</div>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 10px 0;">
                              <div style="color: #666666; font-size: 13px; margin-bottom: 5px; text-transform: uppercase; letter-spacing: 0.5px;">Guests</div>
                              <div style="color: #2c3e50; font-size: 16px; font-weight: 600;">
                                ${adults || 0} Adult${(adults || 0) !== 1 ? "s" : ""}, ${children || 0} Child${(children || 0) !== 1 ? "ren" : ""}
                              </div>
                            </td>
                          </tr>
                        </table>
                      </div>

                      <!-- Stay Duration -->
                      <div style="background-color: #e7f3ff; border-left: 4px solid #007bff; padding: 15px; margin-bottom: 30px; border-radius: 4px;">
                        <p style="color: #004085; margin: 0; font-size: 14px;">
                          <strong>🌙 Total Stay:</strong> ${Math.ceil((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24))} night(s)
                        </p>
                      </div>

                      <!-- Important Notice -->
                      <div style="background-color: #fff3cd; border-radius: 6px; padding: 18px; margin-bottom: 30px;">
                        <p style="color: #856404; font-size: 14px; margin: 0 0 10px 0; font-weight: 600;">
                          📌 Important Information
                        </p>
                        <ul style="color: #856404; font-size: 14px; margin: 0; padding-left: 20px; line-height: 1.7;">
                          <li>Please bring a valid ID proof and this confirmation email</li>
                          <li>Contact us 24 hours in advance if you need early check-in</li>
                          <li>Cancellations must be made 48 hours before check-in</li>
                        </ul>
                      </div>

                      <!-- Action Buttons -->
                      <div style="text-align: center; margin: 35px 0;">                      
                        <a href="${process.env.WEBSITE_URL || "#"}" style="display: inline-block; padding: 14px 35px; background-color: #007bff; color: #ffffff; text-decoration: none; border-radius: 6px; font-size: 16px; font-weight: 600; margin: 5px;">
                          Contact Us
                        </a>
                      </div>

                      <div style="border-top: 2px solid #e9ecef; padding-top: 25px; margin-top: 35px; text-align: center;">
                        <p style="color: #666666; font-size: 15px; line-height: 1.6; margin: 0 0 5px 0;">
                          We can't wait to welcome you!
                        </p>
                        <p style="color: #999999; font-size: 14px; margin: 0;">
                          <strong>The Hotel Booking Team</strong>
                        </p>
                      </div>
                    </td>
                  </tr>
                </table>

                <!-- Footer -->
                <table role="presentation" style="width: 100%; max-width: 600px; margin: 20px auto;">
                  <tr>
                    <td style="padding: 25px 20px; text-align: center; background-color: #2c3e50; border-radius: 10px;">
                      <p style="color: #bdc3c7; font-size: 14px; margin: 0 0 10px 0;">
                        Questions or special requests? We're here to help!
                      </p>
                      <p style="color: #bdc3c7; font-size: 14px; margin: 0 0 15px 0;">
                        📧 <a href="mailto:${process.env.MAIL_USER}" style="color: #3498db; text-decoration: none;">${process.env.MAIL_USER}</a>
                      </p>
                      <p style="color: #95a5a6; font-size: 12px; margin: 0;">
                        © ${new Date().getFullYear()} Hotel Booking. All rights reserved.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });
    //  <a href="${process.env.WEBSITE_URL || "#"}" style="display: inline-block; padding: 14px 35px; background-color: #28a745; color: #ffffff; text-decoration: none; border-radius: 6px; font-size: 16px; font-weight: 600; margin: 5px;">
    //                           View My Booking
    //                         </a>
    res.status(200).json({
      success: true,
      message: "Booking confirmed and emails sent",
    });
  } catch (error) {
    console.error("Booking Error:", error);
    res.status(500).json({
      success: false,
      message: "Booking failed",
    });
  }
};
