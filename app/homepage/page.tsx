import FaqSection from "../pricing/FaqSection";
import Footer from "../pricing/Footer";
// import SmallBusinessOwnersSection from "./BusineessTypes2";
import { BusinessTypesSection } from "./BusinesssTpesSection";
// import { BusinessTypesSlider } from "./BusinessTypes";
import { CallToAction } from "./CallToAction";
import { FeaturesSection } from "./FeatureSection";
import { FeatureTabs } from "./FeatureTabs";
import { HeroCarousel } from "./Herosection";
import Operationsection from "./OperationSection";
import { PricingCTA } from "./PricingCta";
import { Testimonials } from "./Testimonial";
import { TrustedCompanies } from "./TrustedCompanies";

const HomePage = () => {

    return (
      <div>
        <HeroCarousel />
        <TrustedCompanies />
        <Operationsection />
        <FeaturesSection />
        <FeatureTabs />
        <CallToAction />
        <PricingCTA />
        {/* <SmallBusinessOwnersSection /> */}
        <BusinessTypesSection />
        <Testimonials />

        <FaqSection />
        <Footer />
      </div>
    );
}

export default HomePage