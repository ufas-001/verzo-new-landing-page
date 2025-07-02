import CheckIcon2 from "../components/CheckIcon2";
import Image from "next/image";
// Define the type for the feature
type Feature = {
  title: string;
  description: string;
  image: string
};


const features: Feature[] = [
  {
    title: "Create invoices quickly",
    description:
      "Create and send professional invoices to your customers in seconds.",
    image: "/Invoice-Banner.png",
  },
  {
    title: "Generate Receipts Instantly",
    description:
      "Received a payment? Generate clear, professional receipts in seconds. Impress clients with your efficiency and attention to detail.",
    image: "/Receipt.png",
  },
  {
    title: "Instant Sharing at Your Fingertips",
    description:
      "Why wait? Send invoices, receipts, or financial summaries to your clients instantly. With Verzo, communication is seamless, fast, and always professional.",
    image: "/Sharing.png",
  },
];

const InvoicingFeatures = () => {
  return (
    <section className="w-full py-12 md:py-20 bg-primary-bgTint">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-primary-brandBlue text-center mb-8 md:mb-12 leading-tight">
          Start with the best invoicing tool
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 place-items-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-primary-brandTint rounded-xl p-4 md:p-6 w-full max-w-sm md:max-w-none flex flex-col"
            >
              {/* Image container */}
              <div className="w-full aspect-[319/196] overflow-hidden rounded-[15px] relative mb-4">
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1">
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvoicingFeatures;
