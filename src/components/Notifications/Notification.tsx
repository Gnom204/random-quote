import React, { useEffect, useState } from "react";
import "./Notification.css";

type Props = {
  notType: string;
  message: string;
  close: boolean;
};

export function Notification({ notType, message, close }: Props) {
  const [width, setWidth] = useState(0);
  const [exit, setExit] = useState(false);

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

  const handleCloseNotification = () => {
    setExit(true);
  };

  useEffect(() => {
    handleStartTimer();
  }, []);

  useEffect(() => {
    if (width === 100) {
      handleCloseNotification();
    }
  }, [width]);

  return (
    <div
      className={`notification-item ${
        notType === "SUCCESS" ? "success" : "error"
      } ${exit ? "exit" : ""}`}
    >
      <p>{message}</p>
      <div className={"bar"} style={{ width: `${width}%` }}></div>
    </div>
  );
}
