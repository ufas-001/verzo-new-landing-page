import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const businessTypes = [
  {
    title: "Freelancers",
    description:
      "Keep your books in check, your clients happy, and your work on track.",
    link: "/freelancers",
  },
  {
    title: "Solopreneurs",
    description:
      "Keep your books in check, your clients happy, and your work on track. Invest in accounting software that respects your time so you can spend it on building your business, not crunching numbers.",
    link: "/solopreneurs",
  },
  {
    title: "Small businesses",
    description:
      "Save time (and money!) by using Verzo to collaborate with your team while handling accounting, billing, and payroll.",
    link: "/businesses-with-employees",
  },
  
];

export function BusinessTypesSection() {
  return (
    <section className="w-full bg-white">
      {/* Image Section */}
      <div className="relative pb-24">
        {/* Background Image */}
        <div className="relative h-[400px] w-full">
          <Image
            src="/pexels-9.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            priority
          />

          {/* Hero Content */}
          <div className="absolute inset-0 flex items-start">
            <div className="container mx-auto px-4 py-12">
              <div className="ml-8 md:ml-16 lg:ml-24 pt-8">
                {/* <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Use Verzo
                </h2>
                <p className="text-4xl md:text-5xl font-bold text-blue-500">
                  your way
                </p> */}
              </div>
            </div>
          </div>
        </div>

        {/* Business Types Cards - Positioned to overlap with image */}
        <div className="absolute bottom-[30px] left-0 right-0 transform translate-y-1/2">
          <div className="container mx-auto px-4">
            <div className="bg-blue-900 rounded-[15px] overflow-hidden max-w-6xl mx-auto shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {businessTypes.map((type, index) => (
                  <div
                    key={index}
                    className={`p-8 flex flex-col h-full ${
                      index < businessTypes.length - 1
                        ? "border-r border-blue-800"
                        : ""
                    }`}
                  >
                    <h3 className="text-xl font-bold text-white mb-4">
                      {type.title}
                    </h3>
                    <p className="text-white/90 mb-10 flex-grow">
                      {type.description}
                    </p>
                    <Link
                      href={type.link}
                      className="text-white font-medium flex items-center group hover:text-blue-200 transition-colors"
                    >
                      Verzo for {type.title.toLowerCase()}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for content below the cards */}
      <div className="h-64"></div>
    </section>
  );
}
