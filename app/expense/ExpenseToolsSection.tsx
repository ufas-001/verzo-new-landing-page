import CheckIcon2 from "../components/CheckIcon2";
import ExpenseTool1 from "@/public/expenseTool1";
import ExpenseTool2 from "@/public/expenseTool2";
import ExpenseTool3 from "@/public/expenseTool3";
// // Define the type for the feature
// type Feature = {
//   title: string;
//   description: string;
//   image: string;
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

const ExpenseFeatures = () => {
  return (
    <section className="w-full py-12 md:py-20 bg-primary-faintBlue">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-center mb-8 md:mb-12 leading-tight">
          Start With The Best Expense Tool
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
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex row w-full items-center justify-between mb-12">
            <div className="w-1/2">
              <ExpenseTool1 />
            </div>
            <div className="w-1/2 ">
              <h1 className="text-[36px]">Keep Track of What Goes Out</h1>
              <p className="text-lg text-primary-lightGray pt-3">
                Record expenses and purchases as they happen, keep your vendor
                details in one place, and maintain clear and organized records.
              </p>
            </div>
          </div>

          <div className="flex row w-full items-center justify-between mb-12">
            <div className="w-1/2">
              <h1 className="text-[36px]">Pay Vendors Without the Confusion</h1>
              <p className="text-lg text-primary-lightGray pt-3">
                Send payments now or later, tag each expense, and store vendor
                details and receipts so every expense is easy to trace and
                audit-ready.
              </p>
            </div>
            <div className="w-1/2 flex justify-end">
              <ExpenseTool2 />
            </div>
          </div>
          <div className="flex row w-full items-center justify-between">
            <div className="w-1/2">
              <ExpenseTool3 />
            </div>
            <div className="w-1/2 ">
              <h1 className="text-[36px]">
                Turn Spending Into Clear Business Insights
              </h1>
              <p className="text-lg text-primary-lightGray pt-3">
                From daily expenses to large purchases, Verzo organizes your
                payment history, vendor data, and receipts to reveal patterns
                that support better decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpenseFeatures;
