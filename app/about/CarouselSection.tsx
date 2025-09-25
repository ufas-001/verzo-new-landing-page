import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";

const productData = [
  {
    id: 1,
    header: "Our Story",
    description:
      "At Verzo, we're on a mission to simplify financial management. Founded by entrepreneurs who know the challenges, Verzo was born to empower businesses with more efficient, user-friendly bookkeeping solutions. ",
  },
  {
    id: 2,
    header: "Our Mission",
    description:
      "Our mission is to innovate bookkeeping, offering user-friendly solutions that enhance financial clarity. We're committed to reducing errors, saving time, and being the trusted partner for businesses' financial needs.",
  },
  {
    id: 3,
    header: "Our Vision",
    description:
      "At Verzo, we envision becoming the catalyst for financial excellence, simplifying financial management with cost-effective tools that ensure clarity, streamline record-keeping, and drive businesses toward success.",
  },
  {
    id: 4,
    header: "Core Values",
    description:
      "Our commitment to excellence is unwavering. We continuously refine our application to ensure it meets the highest standards of functionality. Our customer-centric approach guides every decision we make. ",
  },
];

const CarouselSection = () => {
  return (
    <div className=" bg-primary-background w-full pt-[20px] lg:pb-[80px] pb-[30px]">
      <div className=" mx-auto lg:w-[85%] w-[90%] max-w-[1220px] flex flex-col gap-y-[36px] md:gap-y-[50px]">
        <div className=" flex flex-col md:flex-row gap-y-9 justify-between md:items-center">
          <p className=" height-normal text-3xl md:text-5xl text-center font-medium text-opacity-90 tracking-tight text-primary-black">
            Empowering businesses, creating success
          </p>
        </div>
        <div className=" w-[80%] md:w-[90%] lg:w-full mx-auto lg:mx-0">
          <Carousel
            opts={{
              align: "end",
            }}
            className="w-full mx-auto"
          >
            <CarouselContent>
              {productData.map((product) => (
                <CarouselItem
                  key={product.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-5">
                    <Card className=" border-0 rounded-[30px]">
                      <CardHeader className="  md:text-[32px] rounded-t-[30px] lg:text-[36px] text-white bg-primary-darkBlue flex items-center justify-center">
                        {product.header}
                      </CardHeader>
                      <CardContent className="flex text-primary-greyBold md:text-[18px] lg:text-[20px] text-sm md:p-6 px-5 md:leading-[30px] leading-6 md:py-5 py-3">
                        {product.description}
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CarouselSection;
