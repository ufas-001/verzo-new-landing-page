import React from "react";
import MessageIcon from "@/public/MessageIcon";
import CallIcon from "@/public/CallIcon";
import LocationIcon from "@/public/LocationIcon";

const ContactSection = () => {
  const contacts = [
    {
      icon: <MessageIcon />,
      text: "info@verzo.app",
    },
    {
      icon: <CallIcon />,
      text: "+2349123456789",
    },
    {
      icon: <LocationIcon />,
      text: "Open in Google Maps",
    },
  ];

  return (
    <div className="py-[80px] pb-[96px] bg-primary-background">
      <div className="mx-auto lg:w-[85%] w-[90%] max-w-[1220px] rounded-[10px] md:rounded-[20px] min-h-[180px] purplegradient py-[60px] flex flex-col space-y-9 md:space-y-0 md:flex-row px-8 md:px-[20px] xl:px-[35px] justify-between">
        {contacts.map((contact) => (
          <div key={contact.text} className="flex gap-[14px] items-center ">
            <div className="cursor-pointer w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] rounded-full border-[1px] border-white flex items-center justify-center">
              {contact.icon}
            </div>
            <h4 className="cursor-pointer tracking-[-0.3px] font-medium text-base md:text-lg lg:text-xl xl:text-2xl text-white">
              {contact.text}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactSection;
