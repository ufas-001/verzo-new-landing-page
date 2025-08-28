import TrustedLogo1 from "@/public/trusted-logo-1";
import TrustedLogo2 from "@/public/trusted-logo-2";
import TrustedLogo3 from "@/public/trusted-logo-3";
import TrustedLogo4 from "@/public/trusted-logo-4";

export function TrustedCompanies() {
  return (
    <div className="w-full bg-black py-12">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-white text-xl mb-8 text-center md:text-left">
          Partners
        </p>

        {/* Desktop: flex wrap, Mobile: horizontal scroll */}
        <div className="hidden md:flex flex-wrap items-center justify-between gap-4">
          <TrustedLogo1 />
          <TrustedLogo2 />
          <TrustedLogo3 />
          <TrustedLogo4 />
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="md:hidden overflow-x-auto">
          <div className="flex items-center gap-8 pb-2 min-w-max">
            <TrustedLogo1 />
            <TrustedLogo2 />
            <TrustedLogo3 />
            <TrustedLogo4 />
          </div>
        </div>
      </div>
    </div>
  );
}
