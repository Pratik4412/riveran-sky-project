import transporter from "../config/mailConfig.js";

export const sendBookingConfirmation = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }
    const mailOptions = {
      from: `"Website Enquiry" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      subject: "New Contact Enquiry From Website",
      html: `
        <h2>New Contact Enquiry Received From Website</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone || "N/A"}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    };
    await transporter.sendMail(mailOptions);
    res.status(200).json({
      success: true,
      message: "Enquiry sent successfully",
    });
  } catch (error) {
    console.error("Error sending booking confirmation email:", error);
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};
