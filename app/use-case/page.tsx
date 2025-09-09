import { FixedHeader } from "@/components/header"
import Footer from "../pricing/Footer"
import FaqSection from "../pricing/FaqSection"
import { CallToAction } from "./CallToAction"
import FeaturedTestimonial from "./Testimonials"
import Herosection from "./Herosection"
import Solopreneurs from "./Solopreneurs"

const UseCase = () => {


    return(
        <>
            <FixedHeader />
            <Herosection />
            <Solopreneurs />
            <FeaturedTestimonial />
            <CallToAction />
            <FaqSection />
            <Footer />
        </>
    )
}


export default UseCase