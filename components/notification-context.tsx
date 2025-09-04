"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

interface NotificationContextType {
  notificationVisible: boolean;
  setNotificationVisible: (visible: boolean) => void;
  isHydrated: boolean;
}

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);

export function NotificationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [notificationVisible, setNotificationVisible] = useState(true);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // After hydration, check sessionStorage and update state
    const stored = sessionStorage.getItem("verzo-notification-visible");
    // Only hide if explicitly set to false (user closed it)
    if (stored === "false") {
      setNotificationVisible(false);
    }
    setIsHydrated(true);
  }, []);

  const handleSetNotificationVisible = (visible: boolean) => {
    setNotificationVisible(visible);
    sessionStorage.setItem("verzo-notification-visible", visible.toString());
  };

  useEffect(() => {
    const handleNotificationClose = () => {
      handleSetNotificationVisible(false);
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
    <NotificationContext.Provider
      value={{
        notificationVisible,
        setNotificationVisible: handleSetNotificationVisible,
        isHydrated,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotification() {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  }
  return context;
}
