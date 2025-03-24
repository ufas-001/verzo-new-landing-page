"use client";
import type React from "react";
import Image from "next/image";

interface BusinessOwner {
  title: string;
  description: string;
  imageSrc: string;
  name: string;
  role: string;
}



const BusinessOwnerCard: React.FC<BusinessOwner> = ({
  title,
  description,
  imageSrc,
  name,
}) => {
  return (
    <div className="flex flex-col h-full">
      <h3 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-800 mb-6">{description}</p>

      <div className="rounded-[10px] overflow-hidden mb-6 flex-grow">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={`${title} - ${name}`}
          className="w-full h-[400px] object-cover"
        />
      </div>

      {/* <h4 className="font-medium text-gray-900 text-lg">{name}</h4>
      <p className="text-gray-800">{role}</p> */}
    </div>
  );
};

const SmallBusinessOwnersSection: React.FC = () => {
  const businessOwners: BusinessOwner[] = [
    {
      title: "Freelancers",
      description: "Pay your staff (and yourself!) with confidence.",
      imageSrc: "/pexels-4.jpg",
      name: "Tru Williams",
      role: "Photographer/Videographer",
    },
    {
      title: "Solopreneurs",
      description: "Get tidy books for tax time—one less thing to worry about.",
      imageSrc: "/pexels-5.jpg",
      name: "Dae",
      role: "Dae the poet",
    },
    {
      title: "Small Business Owners",
      description: "Fire off professional invoices and estimates in minutes.",
      imageSrc: "/pexels-7.jpg",
      name: "Troy Styke",
      role: "Crystal Clean Window Cleaning",
    },
    {
      title: "Consultants",
      description: "Set up recurring invoices and payments for repeat clients.",
      imageSrc: "/pexels-2.jpg",
      name: "Sarah Stockdale",
      role: "Growthclass Founder",
    },
  ];

  return (
    <section className="w-full bg-[#EDF6FF] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-gray-900 mb-16 text-center">
          Built for small business owners like you
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          {businessOwners.map((owner, index) => (
            <BusinessOwnerCard
              key={index}
              title={owner.title}
              description={owner.description}
              imageSrc={owner.imageSrc}
              name={owner.name}
              role={owner.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmallBusinessOwnersSection;
