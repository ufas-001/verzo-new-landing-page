"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const tabs = [
  {
    id: "invoice",
    label: "Invoice",
    title: "Send invoices and get rewarded",
    description:
      "Create professional invoices, accept online payments, track delayed payment and get Verzo points when they're paid.",
    image: "/invoice.svg",
  },
  {
    id: "expense",
    label: "Expense",
    title: "Track expenses effortlessly",
    description:
      "Capture receipts on the go, categorize expenses automatically, and generate detailed reports for better financial insights.",
    image: "/invoice.svg",
  },
  {
    id: "purchase",
    label: "Purchase",
    title: "Streamline your purchases",
    description:
      "Manage purchase orders, track deliveries, and maintain vendor relationships all in one place.",
    image: "/invoice.svg",
  },
  {
    id: "cards",
    label: "Cards",
    title: "Smart corporate cards",
    description:
      "Issue virtual and physical cards to your team with custom spending limits and real-time expense tracking.",
    image: "/invoice.svg",
  },
];

export function FeatureTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  // Auto-rotate tabs
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((current) => {
        const currentIndex = tabs.findIndex((tab) => tab.id === current);
        return tabs[(currentIndex + 1) % tabs.length].id;
      });
    }, 5000); // Change tab every 5 seconds

    return () => clearInterval(interval);
  }, []);

//   const activeTabContent = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="w-full bg-primary-darkBlue py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-12">
          Improved management at
          <br />
          every growth stage
        </h2>

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant="ghost"
              className={`
                rounded-full px-6 py-2 text-sm font-medium transition-colors
                ${
                  activeTab === tab.id
                    ? "bg-primary-brandBlue text-white hover:bg-blue-500"
                    : "bg-primary-blue text-white/70 hover:bg-blue-700 hover:text-white"
                }
              `}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Content area */}
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Image */}
          <div className="relative h-[402px] overflow-hidden order-2 md:order-1">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`absolute  inset-0 transition-opacity overflow-hidden duration-500  
                  ${
                    activeTab === tab.id
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }
                `}
              >
                <Image
                  src={tab.image}
                  alt={`${tab.label} dashboard`}
                  fill
                  className="object-cover rounded-[10px] "
                  priority={tab.id === "invoice"}
                />
              </div>
            ))}
          </div>

          {/* Text content */}
          <div className="text-white space-y-6 order-1 md:order-2 ">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`transition-opacity duration-500 max-w-[388px]
                  ${
                    activeTab === tab.id
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none absolute"
                  }
                `}
              >
                <h3 className="text-3xl font-bold mb-4">
                  {tab.title}
                </h3>
                <p className="text-xl text-white/90 mb-8">{tab.description}</p>
                <Button
                  variant="link"
                  className="text-white flex items-center group p-0 text-xl h-auto font-normal hover:no-underline"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-6 w-4 mt-1 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
