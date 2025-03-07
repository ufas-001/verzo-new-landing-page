"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import Footer from "./Footer";

import { useState } from "react";
import FaqSection from "./FaqSection";
import FeaturePlan from "./FeaturePlan";

import CheckIcon from "../components/CheckIcon";

const PricingPage = () => {
  const [activeTab, setActiveTab] = useState(1);
  const switchTab = (tab: number) => {
    setActiveTab(tab);
  };
  return (
    <div className=" bg-primary-lightWhite">
      {/* Navigation */}
     

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 pt-20 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-3xl tracking-tight mb-8 text-primary-brandBlue font-bold">
            Simple pricing to make
            <br />
            your plans work
          </h1>

          <div className=" bg-[#FFFFFF] rounded-[10px] px-[12px] py-[2px] h-[44px] flex w-[300px] items-center justify-center mx-auto">
            <button
              className={` px-[16px] py-[4px] rounded-[10px] text-base flex items-center ${
                activeTab === 1
                  ? "bg-blue-500 text-white"
                  : " text-primary-greytext"
              }`}
              onClick={() => switchTab(1)}
            >
              Monthly
            </button>
            <button
              className={` px-[16px] py-[4px] rounded-[10px] text-base flex items-center ${
                activeTab === 2
                  ? "bg-blue-500 text-white"
                  : " text-primary-greytext"
              }`}
              onClick={() => switchTab(2)}
            >
              Annually (Save 10%)
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-row justify-center gap-x-8">
          {/* Starter Plan */}
          <Card className="border-[0px] bg-white w-[375px]">
            <CardHeader>
              <CardTitle className="text-xl font-bold">Starter Plan</CardTitle>
              <CardDescription className=" text-primary-greyBold">
                Ideal for freelancers and small businesses
              </CardDescription>
              <div className="pt-5">
                <span className="text-3xl font-bold">
                  {activeTab === 1 ? "₦10,000" : "₦108,000"}{" "}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                className="w-154px rounded-[10px] mb-12 border-primary-greyLight text-primary-greyBold"
              >
                Get 30 days free
              </Button>
              <ul className="space-y-4 text-base">
                <li className="flex items-center gap-3">
                  <CheckIcon />
                  <span>Great for startups looking to scale quickly</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon />
                  <span>Perfect for creative agencies seeking efficiency</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon />
                  <span>Great for startups looking to scale quickly</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Pro Plan */}
          <Card className="relative border-[0px] bg-white w-[375px]">
            <div className="absolute -top-3 left-[50px] -translate-x-1/2">
              <span className="bg-white text-primarp-branBlue text-primary-brandBlue font-bold text-sm px-[18px] py-[6px] rounded-full border-primary-brandBlue border-[1px]">
                Popular
              </span>
            </div>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-blue-600">
                Pro Plan
              </CardTitle>
              <CardDescription className=" text-primary-greyBold">
                Ideal for freelancers and small businesses
              </CardDescription>
              <div className="pt-5">
                <span className="text-3xl font-bold">
                  {activeTab === 1 ? "₦18,000" : "₦194,000"}{" "}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                className="w-154px rounded-[10px] mb-12 border-primary-greyLight text-primary-greyBold"
              >
                Get 30 days free
              </Button>
              <ul className="space-y-4 text-base">
                <li className="flex items-center gap-3">
                  <CheckIcon />
                  <span>Great for startups looking to scale quickly</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon />
                  <span>Perfect for creative agencies seeking efficiency</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon />
                  <span>Perfect for creative agencies seeking efficiency</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        {/* Add the FeatureComparison component */}
      </main>
      <FeaturePlan />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default PricingPage;
