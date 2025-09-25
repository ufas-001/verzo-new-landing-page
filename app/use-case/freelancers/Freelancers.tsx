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

const Freelancers = () => {
  return (
    <section className="w-full py-12 md:py-20 border-t border-primary-brandBlue rounded-[20px]">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-2xl max-w-3xl text-center mx-auto sm:text-2xl md:text-2xl lg:text-4xl font-medium tracking-tight text-primary-black leading-tight md:leading-[100px] ">
          Overview
        </h1>
        <p className="text-[22px] text-primary-greyBold pt-6 max-w-5xl mx-auto text-center">
          Daniel, a freelance graphic designer in Abuja, was constantly chasing
          overdue payments and losing track of project expenses. By adopting
          Verzo, he used Invoices to bill clients professionally and Virtual
          Cards to manage his software subscriptions. This made his work look
          more professional, reduced stress, and gave him confidence in his
          business.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-36">
          <div className="w-1/2 flex flex-col justify-between h-full">
            <h1 className="text-2xl sm:text-2xl md:text-2xl lg:text-4xl font-medium tracking-tight text-primary-black leading-tight md:leading-[100px]">
              Before using verzo for his business
            </h1>
            <p className="text-[18px] max-w-[439px] text-primary-greyBold pt-14 ">
              Daniel worked on multiple projects at a time, billing local and
              international clients. He often relied on casual email reminders
              for payments, which delayed his cash flow. His subscriptions for
              Adobe, Canva, and stock images also drained his personal account,
              leaving him frustrated.
            </p>
          </div>
          <Image src="/Freelancers.svg" alt="Solopreneur Overview" width={577} height={320} />
        </div>
      </div>
    </section>
  );
};

export default Freelancers;
