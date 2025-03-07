"use client"
import Verzologosmall from "@/app/components/verzoLogoSmall"
import { HoverCard } from "@radix-ui/react-hover-card"
import Link from "next/link"
import { useEffect, useState } from "react"
import { HoverCardContent, HoverCardTrigger } from "./ui/hover-card"
import { ChevronDown } from "lucide-react"
import { Button } from "./ui/button"
import InvoiceLogo from "@/app/components/InvoiceLogo"


export function FixedHeader() {
  const [notificationVisible, setNotificationVisible] = useState(true)

  useEffect(() => {
    const handleNotificationClose = () => {
      setNotificationVisible(false)
    }

    window.addEventListener("notification-closed", handleNotificationClose)

    return () => {
      window.removeEventListener("notification-closed", handleNotificationClose)
    }
  }, [])

  return (
    <header
      className="border-b fixed left-0 right-0 z-10 w-full bg-white transition-all duration-300"
      style={{ top: notificationVisible ? "2.5rem" : 0 }}
    >
      <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/">
          <Verzologosmall />
        </Link>
        <div className="hidden md:flex items-center gap-14">
          <div className="text-gray-600 flex flex-row items-center gap-x-[6px] hover:text-gray-900">
            <HoverCard openDelay={200} closeDelay={100}>
              <HoverCardTrigger className="text-gray-600 flex flex-row items-center gap-x-[6px] text-primary-greytext hover:text-primary-brandBlue cursor-pointer transition-colors">
                <span className="text-black text-base">Feature </span>
                <ChevronDown className="w-4 h-4" />
              </HoverCardTrigger>
              <HoverCardContent className="w-screen mt-[16px] shadow-md bg-primary-brandBlue text-white py-16 tracking-[0.2px]">
                <div className="max-w-7xl mx-auto flex flex-row gap-x-16">
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Products
                    </h3>
                    <p className="text-white text-xs">
                      Get the best tools to manage your business
                    </p>

                    <div className="mt-12">
                      <p className="text-xs">Use case</p>
                      <div className="grid grid-cols-3 gap-2 mt-4">
                        <Button
                          variant="ghost"
                          className="bg-primary-darkBlue hover:bg-blue-600/60 text-white rounded-full h-[27px] px-2 text-xs"
                        >
                          Freelancers
                        </Button>
                        <Button
                          variant="ghost"
                          className="bg-primary-darkBlue hover:bg-blue-600/60 text-white rounded-full h-[27px] px-2 text-xs"
                        >
                          SMEs
                        </Button>
                        <Button
                          variant="ghost"
                          className="bg-primary-darkBlue hover:bg-blue-600/60 text-white rounded-full h-[27px] px-2 text-xs"
                        >
                          Startups
                        </Button>
                        <Button
                          variant="ghost"
                          className="bg-primary-darkBlue hover:bg-blue-600/60 text-white rounded-full h-[27px] px-2 text-xs"
                        >
                          Fintechs
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-4">
                    <Link
                      href="#"
                      className="p-3 rounded-[10px] w-[191px] bg-primary-darkBlue hover:bg-blue-600/60 transition-colors flex flex-col gap-y-4"
                    >
                      <div className="flex items-center gap-x-1">
                        <InvoiceLogo />
                        <span className=" text-base">Invoice</span>
                      </div>
                      <p className="text-xs">
                        Create professional invoices with just a few taps
                      </p>
                    </Link>
                    <Link
                      href="#"
                      className="p-3 rounded-[10px] w-[191px] bg-primary-darkBlue hover:bg-blue-600/60 transition-colors flex flex-col gap-y-4"
                    >
                      <div className="flex items-center gap-x-1">
                        <InvoiceLogo />
                        <span className=" text-base">Expense</span>
                      </div>
                      <p className="text-xs">
                        Create professional invoices with just a few taps
                      </p>
                    </Link>
                    <Link
                      href="#"
                      className="p-3 rounded-[10px] w-[191px] bg-primary-darkBlue hover:bg-blue-600/60 transition-colors flex flex-col gap-y-4"
                    >
                      <div className="flex items-center gap-x-1">
                        <InvoiceLogo />
                        <span className=" text-base">Purchase</span>
                      </div>
                      <p className="text-xs">
                        Create professional invoices with just a few taps
                      </p>
                    </Link>
                    <Link
                      href="#"
                      className="p-3 rounded-[10px] w-[191px] bg-primary-darkBlue hover:bg-blue-600/60 transition-colors flex flex-col gap-y-4"
                    >
                      <div className="flex items-center gap-x-1">
                        <InvoiceLogo />
                        <span className=" text-base">Virtual cards</span>
                      </div>
                      <p className="text-xs">
                        Create professional invoices with just a few taps
                      </p>
                    </Link>
                    <Link
                      href="#"
                      className="p-3 rounded-[10px] w-[191px] bg-primary-darkBlue hover:bg-blue-600/60 transition-colors flex flex-col gap-y-4"
                    >
                      <div className="flex items-center gap-x-1">
                        <InvoiceLogo />
                        <span className=" text-base">Inventory</span>
                      </div>
                      <p className="text-xs">
                        Create professional invoices with just a few taps
                      </p>
                    </Link>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
            {/* <ChevronDown className="w-4 h-4 mt-[2px]" /> */}
          </div>
          <Link
            href="/pricing"
            className="text-black text-base hover:text-gray-900"
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="text-gray-600 flex flex-row items-center gap-x-[6px] hover:text-gray-900"
          >
            <span className="text-black text-base">Company</span>
            <ChevronDown className="w-4 h-4 mt-[2px]" />
          </Link>
          <Link
            href="#"
            className="text-gray-600 flex flex-row items-center gap-x-[6px] hover:text-gray-900"
          >
            <span className="text-black text-base">Resources</span>
            <ChevronDown className="w-4 h-4 mt-[2px]" />
          </Link>
        </div>
        <Button
          variant="outline"
          className="border-radius-sm text-primary-grey"
        >
          Start your free trial
        </Button>
      </nav>
    </header>
  );
}