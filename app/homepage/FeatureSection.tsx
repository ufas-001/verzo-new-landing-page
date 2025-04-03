import InvoiceIcon from "../components/InvoiceIcon";

const features = [
  {
    title: "A user-friendly dashboard built for you, not your accountant.",
  },
  {
    title: "A user-friendly dashboard built for you, not your accountant.",
  },
  {
    title: "A user-friendly dashboard built for you, not your accountant.",
  },
  {
    title: "A user-friendly dashboard built for you, not your accountant.",
  },
];

export function FeaturesSection() {
  return (
    <div className="w-full bg-primary-brandBlue py-20 relative">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-white text-5xl font-medium text-center mb-16">
          Your All-in-One Bookkeeping Solution
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
                <InvoiceIcon />
              <p className="text-white text-lg">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
