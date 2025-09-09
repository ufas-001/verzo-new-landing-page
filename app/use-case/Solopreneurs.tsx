import Solopreneur1 from "@/public/solopreneur-1";
import Solopreneur2 from "@/public/solopreneur-2";
import Solopreneur3 from "@/public/solopreneur-3";
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
    <section className="w-full py-12 md:py-20 bg-primary-faintBlue">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex space-x-2 items-center mb-3">
          <svg
            width="21"
            height="24"
            viewBox="0 0 21 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5 12C13.8141 12 16.5 9.31406 16.5 6C16.5 2.68594 13.8141 0 10.5 0C7.18594 0 4.5 2.68594 4.5 6C4.5 9.31406 7.18594 12 10.5 12ZM14.9906 13.5281L12.75 22.5L11.25 16.125L12.75 13.5H8.25L9.75 16.125L8.25 22.5L6.00937 13.5281C2.66719 13.6875 0 16.4203 0 19.8V21.75C0 22.9922 1.00781 24 2.25 24H18.75C19.9922 24 21 22.9922 21 21.75V19.8C21 16.4203 18.3328 13.6875 14.9906 13.5281Z"
              fill="url(#paint0_linear_14806_21280)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_14806_21280"
                x1="-4.97629e-08"
                y1="0.4058"
                x2="25.5108"
                y2="7.55428"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.307292" stopColor="#027DFF" stopOpacity="0.9" />
                <stop offset="0.494792" stopColor="#027DFF" stopOpacity="0.9" />
                <stop offset="0.958333" stopColor="#027DFF" />
              </linearGradient>
            </defs>
          </svg>
          <p className="text-xl text-primary-brandBlue">Solopreneurs</p>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-10 leading-tight">
          Run Your Business Like a Pro Even on Your Own
        </h2>

        <p className="text-lg mb-10">
          When you’re doing it all yourself, every minute and every naira
          counts. Verzo keeps you organized by letting you track expenses, send
          invoices, and monitor sales in one simple dashboard. Create virtual
          cards for subscriptions or purchases, so you stay in control of your
          cash flow without the guesswork.
        </p>

        {/* Feature cards */}
        <div className="">
          <div className="flex row w-full items-center justify-between">
            <div className="w-1/2">
              <Solopreneur1 />
            </div>
            <div className="w-1/2 ">
              <h1 className="text-[36px]">
                Track every outgoing cost to know exactly where your money goes.
              </h1>
            </div>
          </div>

          <div className="flex row w-full items-center justify-between">
            <div className="w-1/2">
              <h1 className="text-[36px]">
                Send invoices and share receipts to keep clients or customers
                updated.
              </h1>
            </div>
            <div className="w-1/2 flex justify-end">
              <Solopreneur2 />
            </div>
          </div>
          <div className="flex row w-full items-center justify-between">
            <div className="w-1/2">
              <Solopreneur3 />
            </div>
            <div className="w-1/2 ">
              <h1 className="text-[36px]">
                Use our virtual cards to make payments and keep your
                business moving.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solopreneurs;
