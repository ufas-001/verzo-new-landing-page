"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NotificationBannerProps {
  message: string;
}

export function NotificationBanner({ message }: NotificationBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-primary-brandBlue text-white py-2 px-4 fixed top-0 left-0 right-0 z-50 w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-center flex-1">{message}</div>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-blue-600 absolute right-4 top-1/2 transform -translate-y-1/2"
          onClick={() => {
            setIsVisible(false);
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
