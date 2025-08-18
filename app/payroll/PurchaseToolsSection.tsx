import CheckIcon2 from "../components/CheckIcon2";
import PayrollTool1 from "@/public/payrollTool1";
import PayrollTool2 from "@/public/payrollTool2";
import PayrollTool3 from "@/public/payrollTool3";
// Define the type for the feature
// type Feature = {
//   title: string;
//   description: string;
//   image: string
// };


// const features: Feature[] = [
//   {
//     title: "Create invoices quickly",
//     description:
//       "Create and send professional invoices to your customers in seconds.",
//     image: "/Invoice-Banner.png",
//   },
//   {
//     title: "Generate Receipts Instantly",
//     description:
//       "Received a payment? Generate clear, professional receipts in seconds. Impress clients with your efficiency and attention to detail.",
//     image: "/Receipt.png",
//   },
//   {
//     title: "Instant Sharing at Your Fingertips",
//     description:
//       "Why wait? Send invoices, receipts, or financial summaries to your clients instantly. With Verzo, communication is seamless, fast, and always professional.",
//     image: "/Sharing.png",
//   },
// ];

const PurchaseFeatures = () => {
  return (
    <section className="w-full py-12 md:py-20 bg-primary-faintBlue">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-center mb-8 md:mb-12 leading-tight">
          Start With The Best Payroll Tool
        </h2>

        {/* Feature highlights */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-4 sm:gap-x-8 lg:gap-x-16 gap-y-4 mb-8 md:mb-12">
          {[
            "Customise with your brand assets",
            "Personalise with client details",
            "Share instantly",
          ].map((highlight, index) => (
            <div
              key={index}
              className="hidden md:flex items-center gap-2 text-center sm:text-left"
            >
              <CheckIcon2 />
              <span className="text-base md:text-lg">{highlight}</span>
            </div>
          ))}
        </div>

        {/* Feature cards */}
        <div className="">
          <div className="flex row w-full items-center justify-between">
            <div className="w-1/2">
              <PayrollTool1 />
            </div>
            <div className="w-1/2 ">
              <h1 className="text-[36px]">Payroll That Runs Itself</h1>
              <p className="text-lg text-primary-lightGray pt-3">
                Set pay dates and rules once, and every cycle takes care of
                itself salaries calculated, payments sent, and records updated
                without the busywork.
              </p>
            </div>
          </div>

          <div className="flex row w-full items-center justify-between">
            <div className="w-1/2">
              <h1 className="text-[36px]">
                Error-Free Payroll, All in One Place
              </h1>
              <p className="text-lg text-primary-lightGray pt-3">
                Keep staff details, payment rules, and pay history neatly
                organized. Verzo calculates and pays with precision, ensuring
                every cycle is smooth and accurate.
              </p>
            </div>
            <div className="w-1/2 flex justify-end">
              <PayrollTool2 />
            </div>
          </div>
          <div className="flex row w-full items-center justify-between">
            <div className="w-1/2">
              <PayrollTool3 />
            </div>
            <div className="w-1/2 ">
              <h1 className="text-[36px]">Know What’s Happening at a Glance</h1>
              <p className="text-lg text-primary-lightGray pt-3">
                See upcoming pay runs, track past payments, and monitor your
                payroll cycles from a single, clear dashboard no paperwork or
                guesswork.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurchaseFeatures;
