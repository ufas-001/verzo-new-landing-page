import Image from "next/image";

export function TrustedCompanies() {
  return (
    <div className="w-full bg-black py-12">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-white text-xl mb-8 text-center md:text-left">
          Partners
        </p>

        {/* Desktop: flex wrap, Mobile: horizontal scroll */}
        <div className="hidden md:flex flex-wrap items-center justify-between gap-4">
          <Image
            src="/partner-1.png"
            alt="partner 1"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
          <Image
            src="/partner-2.png"
            alt="partner 2"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
          <Image
            src="/partner-3.png"
            alt="partner 3"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
          <Image
            src="/partner-4.png"
            alt="partner 4"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="md:hidden overflow-x-auto">
          <div className="flex items-center gap-8 pb-2 min-w-max">
            <Image
              src="/godaddy.svg"
              alt="GoDaddy"
              width={120}
              height={40}
              className="h-8 w-auto flex-shrink-0"
            />
            <Image
              src="/stripe.svg"
              alt="Stripe"
              width={120}
              height={40}
              className="h-8 w-auto flex-shrink-0"
            />
            <Image
              src="/microsoft.svg"
              alt="Microsoft"
              width={120}
              height={40}
              className="h-8 w-auto flex-shrink-0"
            />
            <Image
              src="/airbnb.svg"
              alt="Airbnb"
              width={120}
              height={40}
              className="h-8 w-auto flex-shrink-0"
            />
            <Image
              src="/asana.svg"
              alt="Asana"
              width={120}
              height={40}
              className="h-8 w-auto flex-shrink-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
