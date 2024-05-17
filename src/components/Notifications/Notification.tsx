import React, { useEffect, useState } from "react";
import "./Notification.css";

type Props = {
  notType: string;
  message: string;
  close: () => void;
};

export function Notification({ notType, message, close }: Props) {
  const [width, setWidth] = useState(0);
  const [isLeave, setIsLeave] = useState(false);

  const handleStartTimer = () => {
    const id = setInterval(() => {
      setWidth((prev) => {
        if (prev < 100) {
          return prev + 0.5;
        }
        clearInterval(id);
        return prev;
      });
    }, 20);
  };

  useEffect(() => {
    handleStartTimer();
  }, []);

  useEffect(() => {
    if (width === 100) {
      setIsLeave(true);
      setTimeout(() => {
        close();
      }, 2000);
    }
  }, [width]);

  return (
    <div className="notification-wrapper">
      <div
        className={`notification-item ${
          notType === "SUCCESS" ? "success" : "error"
        } ${isLeave ? "exit" : ""}`}
      >
        <p>{message}</p>
        <div className={"bar"} style={{ width: `${width}%` }}></div>
      </div>
    </div>
  );
}
