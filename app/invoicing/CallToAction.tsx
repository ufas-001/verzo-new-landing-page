import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";

export function CallToAction() {
  return (
    <div className="w-full mx-auto px-4 bg-primary-darkBlue">
      <div className="max-w-5xl mx-auto px-4 py-20">
        <div className="">
          <div className="">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="space-y-4">
                <div className="space-y-1">
                  <h2 className="text-3xl font-medium tracking-tight text-white">
                    Button up your business
                  </h2>
                  <p className="text-3xl font-medium tracking-tight text-white">
                    by selling online and send instant invoices.
                  </p>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center text-foreground hover:underline text-white"
                >
                  Explore all plans <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <Button
                size="lg"
                className=" bg-primary-lightWhite hover:bg-blue-600 hover:text-white text-primary-darkBlue px-8 rounded-[10px]"
              >
                <Link href="#" className="">
                  Get 30 days free
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
