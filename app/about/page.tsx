import { FixedHeader } from "@/components/header"
import Herosection from "./Herosection"
import CarouselSection from "./CarouselSection"
import Whatdrivesus from "./WhatDriveUs"
import Takechargesection from "./TakeChargeSection"
import Footer from "../pricing/Footer"


const About = () => {
    return (
        <div>
            <FixedHeader />
            <Herosection />
            <CarouselSection />
            <Whatdrivesus />
            <Takechargesection />
            <Footer />
        </div>
    )
}

export default About