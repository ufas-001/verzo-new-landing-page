import FaqSection from "../pricing/FaqSection";
import Footer from "../pricing/Footer";
import { BusinessTypesSlider } from "./BusinessTypes";
import { CallToAction } from "./CallToAction";
import { FeaturesSection } from "./FeatureSection";
import { FeatureTabs } from "./FeatureTabs";
import { HeroCarousel } from "./Herosection";
import { PricingCTA } from "./PricingCta";
import { Testimonials } from "./Testimonial";
import { TrustedCompanies } from "./TrustedCompanies";

const HomePage = () => {

    return (
      <div>
        <HeroCarousel />
        <TrustedCompanies />
        <FeaturesSection />
        <FeatureTabs />
        <Testimonials />
        <CallToAction />
        <PricingCTA />
        <BusinessTypesSlider />
        <FaqSection />
        <Footer />
      </div>
    );
}

export default HomePage