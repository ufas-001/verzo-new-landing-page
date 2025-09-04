"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ManagementTool1 from "@/public/management-tool-1";
import ManagementTool2 from "@/public/management-tool-2";
import ManagementTool3 from "@/public/management-tool-3";
import ManagementTool4 from "@/public/managemment-tool-4.";

const tabs = [
  {
    id: "invoice",
    label: "Invoice",
    title: "Looking to keep sales on track?",
    description:
      "It starts with better invoicing. Create it, send it, mark it paid and your sales update automatically.",
    icon: ManagementTool1,
  },
  {
    id: "expense",
    label: "Expense",
    title: "Tired of losing track of business spending?",
    description:
      "Log your expenses and purchases, link payments, and see exactly where your money goes. No more digging through receipts.",
    icon: ManagementTool2,
  },
  {
    id: "purchase",
    label: "Payroll",
    title: "Need a stress-free way to pay your staff?",
    description:
      "Automate payment schedules, calculate salaries accurately, and pay your team on time. No manual work required.",
    icon: ManagementTool3,
  },
  {
    id: "cards",
    label: "Cards",
    title: "Need a faster way to pay for business expenses?",
    description:
      "With Verzo's virtual cards, control spending, and track every transaction in one place no paperwork or bank queues.",
    icon: ManagementTool4,
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


  return (
    <div className="w-full bg-primary-darkBlue py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-white text-2xl md:text-5xl font-medium text-center mb-12">
          Improved management at every growth stage
        </h2>

        {/* Tab buttons */}
        <div className="hidden md:flex flex-wrap md:justify-center gap-4 mb-16">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant="ghost"
              className={`
                rounded-full px-6 py-2 text-sm font-medium transition-colors
                ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white hover:bg-blue-500"
                    : "bg-blue-800 text-white/70 hover:bg-blue-700 hover:text-white"
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
          <div className="relative h-[402px] md:w-full overflow-hidden order-2 md:order-1">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`absolute inset-0 transition-opacity overflow-hidden duration-500  
                  ${
                    activeTab === tab.id
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }
                `}
              >
                <tab.icon />
              </div>
            ))}
          </div>

          {/* Text content - Fixed version */}
          <div className="text-white space-y-6 order-1 md:order-2">
            <div className="relative max-w-md mx-auto md:max-w-[388px]">
              {/* Fixed height container to prevent layout shift */}
              <div className="h-[250px] relative">
                {tabs.map((tab) => (
                  <div
                    key={tab.id}
                    className={`absolute inset-0 transition-opacity duration-500
                      ${
                        activeTab === tab.id
                          ? "opacity-100"
                          : "opacity-0 pointer-events-none"
                      }
                    `}
                  >
                    <h3 className="md:text-3xl font-medium mb-4">
                      {tab.title}
                    </h3>
                    <p className="text-xl text-white/90 mb-8">
                      {tab.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Learn more button - outside the transitioning content */}
              <Button
                variant="link"
                className="text-white flex items-center group p-0 text-lg md:text-xl h-auto font-normal hover:no-underline"
              >
                Learn more
                <ArrowRight className="ml-2 h-6 w-4 mt-1 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
