"use client";

import { useEffect, useState } from "react";

interface LayoutSpacerProps {
  notificationVisible?: boolean;
}

export function LayoutSpacer({
  notificationVisible = true,
}: LayoutSpacerProps) {
  const [showNotification, setShowNotification] = useState(notificationVisible);

  // Listen for custom event when notification is closed
  useEffect(() => {
    const handleNotificationClose = () => {
      setShowNotification(false);
    };

    window.addEventListener("notification-closed", handleNotificationClose);

    return () => {
      window.removeEventListener(
        "notification-closed",
        handleNotificationClose
      );
    };
  }, []);

  return (
    <div
      className="w-full transition-all duration-300"
      style={{
        height: showNotification ? "calc(4rem + 2.5rem)" : "4rem",
      }}
    />
  );
}
