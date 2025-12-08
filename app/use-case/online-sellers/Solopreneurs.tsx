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

const Solopreneurs = () => {
  return (
    <section className="w-full py-12 md:py-20 border-t border-primary-brandBlue rounded-[20px]">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-2xl max-w-3xl text-center mx-auto sm:text-2xl md:text-2xl lg:text-4xl font-medium tracking-tight text-primary-black leading-tight md:leading-[100px] ">
          Overview
        </h1>
        <p className="text-[22px] text-primary-greyBold pt-6 max-w-5xl mx-auto text-center">
          Chika, a one-woman business owner running a handmade accessories shop
          in Lagos, was struggling to balance sales tracking and customer
          payments. With Verzo, she brought structure to her finances by using
          Invoices and Expenses to manage her cash flow, and a Virtual Card for
          online purchases. The result: fewer late payments, better visibility
          into her money, and more time to focus on growing her brand.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-36">
          <div className="w-1/2 flex flex-col justify-between h-full">
            <h1 className="text-2xl sm:text-2xl md:text-2xl lg:text-4xl font-medium tracking-tight text-primary-black leading-tight md:leading-[100px]">
              Before using verzo for her business
            </h1>
            <p className="text-[18px] max-w-[439px] text-primary-greyBold pt-14 ">
              Chika started her accessories business from home, taking orders
              through Instagram and WhatsApp. She wrote invoices in notebooks
              and used her personal bank account for everything. This mix-up
              made it hard to know who had paid, what she was spending, and
              whether she was making a profit.
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

export default Solopreneurs;
