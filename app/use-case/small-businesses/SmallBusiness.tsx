import Image from "next/image";

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

const SmallBusiness = () => {
  return (
    <section className="w-full py-12 md:py-20 border-t border-primary-brandBlue rounded-[20px]">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-2xl max-w-3xl text-center mx-auto sm:text-2xl md:text-2xl lg:text-4xl font-medium tracking-tight text-primary-black leading-tight md:leading-[100px] ">
          Overview
        </h1>
        <p className="text-[22px] text-primary-greyBold pt-6 max-w-5xl mx-auto text-center">
          Aisha runs a catering company in Kano with 12 staff and multiple
          suppliers. Payroll and supplier payments were chaotic, and event
          budgets often ran over. With Verzo, she streamlined Payroll for staff,
          used Expenses for daily purchases, and introduced Virtual Cards with
          limits for her team leaders. This gave her clarity, reduced errors,
          and improved supplier relationships.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-36">
          <div className="w-1/2 flex flex-col justify-between h-full">
            <h1 className="text-2xl sm:text-2xl md:text-2xl lg:text-4xl font-medium tracking-tight text-primary-black leading-tight md:leading-[100px]">
              Before using verzo for her business
            </h1>
            <p className="text-[18px] max-w-[439px] text-primary-greyBold pt-14 ">
              Her catering business grew from small family events to weddings
              and corporate functions. Growth brought more staff salaries to pay
              and more suppliers to manage. Without a clear system, payments
              were delayed, and expenses were hard to track.
            </p>
          </div>
          <Image
            src="/solopreneur.svg"
            alt="Solopreneur Overview"
            width={577}
            height={320}
          />
        </div>
      </div>
    </section>
  );
};

export default SmallBusiness;
