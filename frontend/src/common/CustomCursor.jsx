import React, { useEffect, useState } from "react";

const CustomCursor = ({ active }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [text, setText] = useState("");
  const fullText = "ABOUT ME ";

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => {
      return () => window.removeEventListener("mousemove", move);
    };
  }, []);

  useEffect(() => {
    if (!active) return;

    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) i = 0;
    }, 100);

    return () => clearInterval(interval);
  }, [active]);

  if (!active) return null;
  return (
    <div
      className="fixed z-[9999] pointer-events-none"
      style={{ left: pos.x, top: pos.y, transform: "translate(-50%, -50%)" }}
    >
      <div className="relative w-32 h-32 rounded-full border border-primary flex items-center justify-center">
        <span className="text-xs text-primary animate-spin-slow">{text}</span>
        <div className="absolute w-3 h-3 bg-primary rounded-full"></div>
      </div>
    </div>
  );
};

export default CustomCursor;
