"use client";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNotification } from "@/components/notification-context";

interface NotificationBannerProps {
  message: string;
}

export function NotificationBanner({ message }: NotificationBannerProps) {
  const { notificationVisible, setNotificationVisible, isHydrated } =
    useNotification();

  // Don't render until hydrated to prevent flash
  if (!isHydrated) {
    // Return a placeholder div with same height to prevent layout shift
    return (
      <div className="bg-primary-brandBlue text-white py-2 px-4 fixed top-0 left-0 right-0 z-50 w-full">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-center text-xs md:text-lg flex-1">{message}</div>
        </div>
      </div>
    );
  }

  if (!notificationVisible) return null;

  return (
    <div className="bg-primary-brandBlue text-white py-2 px-4 fixed top-0 left-0 right-0 z-50 w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-center text-xs md:text-lg flex-1">{message}</div>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-blue-600 absolute right-4 top-1/2 transform -translate-y-1/2"
          onClick={() => {
            setNotificationVisible(false);
            // Still dispatch the event for any other components that might be listening
            window.dispatchEvent(new Event("notification-closed"));
          }}
          aria-label="Close notification"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
