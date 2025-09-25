import { FixedHeader } from "@/components/header";
import Footer from "../../pricing/Footer";
import FaqSection from "../../pricing/FaqSection";
import { CallToAction } from "./CallToAction";
import FeaturedTestimonial from "./Testimonials";
import Herosection from "./Herosection";
import Freelancer from "./Freelancers";
import ProblemChallengeSection from "./ProblemSection";
import Solutions from "./Solution"
import ResultSection from "./Result";

const UseCase = () => {
  return (
    <>
      <FixedHeader />
      <Herosection />
      <Freelancer />
      <ProblemChallengeSection />
      <Solutions />
      <ResultSection />
      <FeaturedTestimonial />
      <CallToAction />
      <FaqSection />
      <Footer />
    </>
  );
};

export default UseCase;
