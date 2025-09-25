"use client";
import React from "react";
import Link from "next/link";
import XIcon from "@/public/XIcon";
import MailIcon from "@/public/MailIcon";
import InstaIcon from "@/public/InstaIcon";
import { Phone } from "lucide-react";

const ContactHerosection = () => {
  return (
    <div className="relative overflow-hidden  pt-16 md:pt-20 min-h-[400px] sm:min-h-[500px] md:h-[600px] flex items-center justify-center">
      <div className="mx-auto lg:w-[85%] w-[90%] max-w-[1220px] justify-center flex flex-col xl:flex-row lg:gap-x-10 2xl:justify-between">
        <div className="md:pt-10 pt-5 flex items-center justify-center flex-col">
          <h1 className="text-4xl md:text-6xl md:max-w-[700px] text-center font-medium pt-3 tracking-[-0.3px] height-normal">
            Let’s connect and grow together.
          </h1>
          <p className=" text-primary-greyBold md:max-w-[800px] text-base md:text-xl md:leading-8 leading-7  text-center pt-6 md:pt-10">
            Get in touch! We look forward to hearing from you. Let’s get you
            started with the trusted support you need. Contact us or Sign up
          </p>
          <div className=" flex flex-row gap-x-8 md:mt-14 mt-10">
            <Link
              className=" border hover:border-primary-black bg-white border-primary-black border-opacity-30 w-[60px] h-[60px] rounded-full flex items-center justify-center"
              href="https://x.com/verzoapp?s=21"
              target="_blank"
            >
              <XIcon />
            </Link>
            <Link
              className=" border bg-white hover:border-primary-black border-primary-black border-opacity-30 w-[60px] h-[60px] rounded-full flex items-center justify-center"
              href="https://www.instagram.com/verzoapp/"
              target="_blank"
            >
              <InstaIcon />
            </Link>
            <Link
              className="border bg-white hover:border-primary-black border-primary-black border-opacity-30 w-[60px] h-[60px] rounded-full flex items-center justify-center"
              href="mailto:info@verzo.app"
            >
              <MailIcon />
            </Link>
            <Link
              className="border bg-white hover:border-primary-black border-primary-black border-opacity-30 w-[60px] h-[60px] rounded-full flex items-center justify-center"
              href="tel:09066181506"
            >
              <Phone className=" w-7 h-7" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHerosection;
