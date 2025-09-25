import SmallBusinessTool1 from "@/public/Small-Business-tool-1";
import SmallBusinessTool2 from "@/public/Small-Business-tool-2";
import SmallBusinessTool3 from "@/public/Small-Business-tool-3";
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

const Solutions = () => {
  return (
    <section className="w-full py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-2xl max-w-3xl text-center mx-auto sm:text-2xl md:text-2xl lg:text-4xl font-medium tracking-tight text-primary-black leading-tight md:leading-[100px] ">
          Solution
        </h1>
        <p className="text-[22px] text-primary-greyBold py-6 max-w-5xl mx-auto text-center">
          Aisha introduced Verzo to bring order:
        </p>

        {/* Feature cards */}
        <div className="">
          <div className="flex row w-full items-center justify-between mb-12">
            <div className="w-1/2">
              <SmallBusinessTool1 />
            </div>
            <div className="w-1/2 ">
              <h1 className="text-[36px]">
                Payroll to automate monthly salary payments and keep accurate
                records.
              </h1>
            </div>
          </div>

          <div className="flex row w-full items-center justify-between mb-12">
            <div className="w-1/2">
              <h1 className="text-[36px]">
                Virtual Cards with limits for team leaders to handle specific
                event budgets.
              </h1>
            </div>
            <div className="w-1/2 flex justify-end">
              <SmallBusinessTool2 />
            </div>
          </div>
          <div className="flex row w-full items-center justify-between">
            <div className="w-1/2">
              <SmallBusinessTool3 />
            </div>
            <div className="w-1/2 ">
              <h1 className="text-[36px]">
                Expenses to capture daily costs like transport, food, and
                rentals.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
