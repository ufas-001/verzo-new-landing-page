import FaqSection from "../pricing/FaqSection"
import Footer from "../pricing/Footer"
import { CallToAction } from "./CallToAction"
import HeroSection from "./Herosection"
import InvoicingFeatures from "./InvoicingToolsSection"
import FeaturedTestimonial from "./Testimonial"
import VirtualCardSection from "./VirtualCardSection"



const Invoicing = () => {


    return (
        <div>
            <HeroSection />
            <InvoicingFeatures />
            <VirtualCardSection />
            <FeaturedTestimonial />
            <CallToAction />
            <FaqSection />
            <Footer />
        </div>
    )
}


export default Invoicing