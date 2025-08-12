// import InvoiceIcon from "../components/InvoiceIcon";
import Image from "next/image";

const features = [
  {
    title: "Built to Keep Up",
    description:
      "Whether it’s payroll or a quick sale, Verzo doesn’t slow you down.",
    image: "/icon-1.png",
  },
  {
    title: "Clear Pricing",
    description: "No fine print. Just tools that work for your business.",
    image: "/icon-3.png",
  },
  {
    title: "Everything Adds Up",
    description: "Your numbers stay in sync, without the extra effort.",
    image: "/icon-2.png",
  },
  {
    title: "One Tool That Does More",
    description: "Why pay for more when one app does the job?",
    image: "/icon-4.png",
  },
];

export function FeaturesSection() {
  return (
    <div className="w-full bg-primary-brandBlue py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-white md:text-5xl font-medium text-center mb-16">
          Built for Trust and Long-Term Value
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-md md:max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-4">
              <Image width={20} height={20} alt="icon" src={feature.image} />
              <div>
                <p className="text-white text-sm md:text-sm font-light">{feature.title}</p>
                <p className="text-white text-sm md:text-sm font-light">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
