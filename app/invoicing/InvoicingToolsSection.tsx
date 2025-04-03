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
    <section className="w-full py-20 bg-primary-bgTint">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-medium text-primary-brandBlue text-center mb-12">
          Start with the best invoicing tool
        </h2>

        {/* Feature highlights */}
        <div className="flex flex-wrap justify-center gap-x-16 gap-y-6 mb-12">
          {[
            "Customise with your brand assets",
            "Personalise with client details",
            "Share instantly",
          ].map((highlight, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckIcon2 />
              <span className="text-lg">{highlight}</span>
            </div>
          ))}
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-primary-brandTint rounded-xl p-4 w-[362px] flex flex-col items-center"
            >
              <div className="w-[319px] h-[196px] overflow-hidden rounded-[15px] relative">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  objectFit="cover"
                />
              </div>
              <h3 className="text-xl font-bold self-start">{feature.title}</h3>
              <div className=" pt-4">
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvoicingFeatures;
