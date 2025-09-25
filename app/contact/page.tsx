import { FixedHeader } from "@/components/header";
import Herosection from "./Herosection";
import Takechargesection from "./TakeChargeSection";
import Footer from "../pricing/Footer";
const Contactpage = () => {
  return (
    <div>
      <FixedHeader />
      <Herosection />
      <Takechargesection />
      <Footer />
    </div>
  );
};

export default Contactpage;
