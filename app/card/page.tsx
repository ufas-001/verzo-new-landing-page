import FaqSection from "../pricing/FaqSection";
import Footer from "../pricing/Footer";
import { CallToAction } from "./CallToAction";
import HeroSection from "./Herosection";
import CardFeatures from "./CardToolsSection";
import FeaturedTestimonial from "./Testimonial";
import VirtualCardSection from "./VirtualCardSection";
import { FixedHeader } from "@/components/header";

const Expense = () => {
  return (
    <div>
      <FixedHeader />
      <HeroSection />
      <CardFeatures />
      <VirtualCardSection />
      <FeaturedTestimonial />
      <CallToAction />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Expense;
