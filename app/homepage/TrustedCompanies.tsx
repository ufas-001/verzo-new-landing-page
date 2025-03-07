import Image from "next/image";

export function TrustedCompanies() {
  return (
    <div className="w-full bg-black py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-white text-xl">Trusted by the best teams</p>
          <Image
            src="/godaddy.svg"
            alt="GoDaddy"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
          <Image
            src="/stripe.svg"
            alt="Stripe"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
          <Image
            src="/microsoft.svg"
            alt="Microsoft"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
          <Image
            src="/airbnb.svg"
            alt="Airbnb"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
          <Image
            src="/asana.svg"
            alt="asana"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
        </div>
      </div>
    </div>
  );
}
