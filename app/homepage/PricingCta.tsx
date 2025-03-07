import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const features = [
  "Invite team members",
  "Create customers and vendors",
  "Manage purchase management",
  "Create, send and track invoices and payments",
  "Manage purchase orders",
];

export function PricingCTA() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-primary-brandBlue rounded-3xl overflow-hidden relative">
          <div className="grid md:grid-cols-2">
            {/* Left side */}
            <div className="p-8 md:p-12 space-y-8 flex flex-col justify-center">
              <h2 className="text-4xl font-bold text-white">
                Try Verzo for free
              </h2>
              <p className="text-xl text-white/90">
                Enjoy 30 days of free access to Verzo, before deciding the best
                plan for you and your business
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-white rounded-[10px] text-blue-500 hover:bg-white/90"
                >
                  Get 30 days free
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-white rounded-[10px] hover:bg-primary-boldBlue"
                >
                  Explore all plans
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Right side - Pricing Card */}
            <div className="md:pr-14 md:pt-12 flex flex-col h-full max-w-[450px] ml-auto">
              <div className="bg-primary-brandTint px-6 py-4 flex justify-between items-center rounded-t-2xl">
                <span className="text-primary-brandBlue text-2xl font-medium">
                  Pro Plan
                </span>
                <span className="text-primary-brandBlue text-lg">No credit card required</span>
              </div>
              <div className=" bg-primary-boldBlue p-4 text-white flex-1">
                <div className="mb-6 text-center">
                  <span className="text-[38px] font-bold">$0</span>
                </div>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-white" />
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
