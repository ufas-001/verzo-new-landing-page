import FaqSection from "../pricing/FaqSection";
import Footer from "../pricing/Footer";
import { CallToAction } from "./CallToAction";
import HeroSection from "./Herosection";
import PurchaseFeatures from "./PurchaseToolsSection";
import FeaturedTestimonial from "./Testimonial";
import VirtualCardSection from "./VirtualCardSection";
import { FixedHeader } from "@/components/header";

const Purchase = () => {
  return (
    <div>
      <FixedHeader />
      <HeroSection />
      <PurchaseFeatures />
      <VirtualCardSection />
      <FeaturedTestimonial />
      <CallToAction />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Purchase;
