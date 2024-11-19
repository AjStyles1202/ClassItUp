import React, { useState } from "react";
import "./LockButton.css";

const LockButton = () => {
  const [isLocked, setIsLocked] = useState(false);

  const toggleLock = () => {
    setIsLocked((prevState) => !prevState);
  };

  return (
    <div className="lock-button-container">
      <button
        className={`lock-button ${isLocked ? "locked" : "unlocked"}`}
        onClick={toggleLock}
      >
        {isLocked ? "🔒 Locked" : "🔓 Unlocked"}
      </button>
      <p className="status-message">
        {isLocked
          ? "The feature is currently locked. Unlock to proceed."
          : "The feature is unlocked. You can now interact with it."}
      </p>
    </div>
  );
};

export default LockButton;
