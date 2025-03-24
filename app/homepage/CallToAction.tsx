import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";


export function CallToAction() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <div className=" rounded-3xl  overflow-hidden">
        <div className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-4">
              <div className="space-y-1">
                <h2 className="text-3xl font-bold tracking-tight">
                  Button up your business
                </h2>
                <p className="text-3xl font-bold tracking-tight">
                  with professional invoices.
                </p>
              </div>
              <Link
                href="#"
                className="inline-flex items-center text-foreground hover:underline"
              >
                Explore all plans <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <Button
              size="lg"
              className=" bg-primary-brandBlue hover:bg-blue-600 text-white px-8 rounded-[10px]"
            >
              <Link href="#">Get 30 days free</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
