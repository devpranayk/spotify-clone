import { useState } from "react";

function IconButton({ iconClass, label, tooltip }) {
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setMessage("You have to Login first");
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <>
      <button className={`icon ${label.toLowerCase()}`} onClick={handleClick} aria-label={label}>
        <i className={iconClass}></i>
        <span className="tooltip">{tooltip}</span>
      </button>

      {message && (
        <div style={{
          position: "fixed",
          bottom: "80px", // ⬆ moved upward
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "#69BFFF", // 🔴 soft red
          color: "#000",
          padding: "10px 20px",
          borderRadius: "20px",
          fontSize: "0.8rem",
          fontWeight:600,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          zIndex: 9999
        }}>
          {message}
        </div>
      )}
    </>
  );
}

export default IconButton;
