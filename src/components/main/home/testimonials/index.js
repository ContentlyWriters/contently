"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import img from "@/assets/image/scholar.png";
import ReactStars from "react-stars";
export default function Testimonials() {
  function scrollToSection() {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 10);
  }
  return (
    <>
      <div id="Testimonials" className="px-4 sm:!px-10 lg:!px-[50px] bg-[#f8f9fa]">
        <div className="max-w-[1280px] mx-auto py-16">
          <div className="mx-auto ">
            <div className="text-[26px] text-center font-bold py-4 underline underline-offset-2">
             <h4> Testimonials </h4>
            </div>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
              className="mx-auto !w-full sm:!w-full !px-4 sm:!px-16 lg:!px-[150px]"
            >
              <CarouselContent>
                {testimonialItems.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="sm:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <Card className="min-h-[400px]">
                        <CardHeader className="flex justify-center items-center">
                          <Image
                            src={img}
                            alt="testimonials"
                            className="w-[100px] h-[100px]"
                          />
                        </CardHeader>
                        <CardContent className="grid justify-center items-center ">
                          <div className="text-center">{item.name}</div>
                          <ReactStars
                            className="flex justify-center items-center my-4"
                            count={5}
                            value={item.stars}
                            edit={false}
                            size={24}
                            color2={"#ffd700"}
                          />
                          <div className="mt-1 text-sm  font-normal ">
                            {item.message}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* <CarouselPrevious className="" />
              <CarouselNext /> */}
            </Carousel>
          </div>
        </div>
      </div>
      <div id="faq" className="px-4 sm:!px-10 lg:!px-[50px] bg-[#000]">
        <div className="max-w-[1280px] mx-auto py-10 lg:py-32 flex lg:flex-row flex-col justify-center items-center lg:gap-10 gap-5">
          <p className="text-white text-3xl text-center">
            Get your assignment done in just a few clicks
          </p>

          <Button
            onClick={scrollToSection}
            type="button"
            className="p-8 bg-[#5b6cf2] text-xl hover:bg-white hover:text-black"
          >
            Write my assignment
          </Button>
        </div>
      </div>
    </>
  );
}

const testimonialItems = [
  {
    name: "Sarah M., California, USA",
    stars: 5,
    message:
      "Absolutely fantastic service! They assisted me with my research paper, and the quality was outstanding. I highly recommend them to any student in need of writing help.",
    image: "image/scholar.png",
  },
  {
    name: "James K., New York, USA",
    stars: 4,
    message:
      "A great experience from start to finish. My essay was excellently written and delivered on time. I couldn't have asked for anything more.",
    image: "image/scholar.png",
  },
  {
    name: "Emily W., Sydney, Australia",
    stars: 5,
    message:
      "Exceptional service! The team truly grasped my requirements and delivered a flawlessly written assignment. This will definitely be my first choice for future projects.",
    image: "image/scholar.png",
  },
  {
    name: "Liam H., Melbourne, Australia",
    stars: 4,
    message:
      "Highly professional and reliable. They saved me so much time, and my grades have never been better. Thank you!",
    image: "image/scholar.png",
  },
  {
    name: "Charlotte R., London, UK",
    stars: 4,
    message:
      "I was having difficulty with my dissertation, but their skilled writers provided excellent support. The quality and attention to detail were remarkable. I highly recommend their services!",
    image: "image/scholar.png",
  },
  {
    name: "Oliver B., Manchester, UK",
    stars: 5,
    message:
      "Outstanding service! The writers are both knowledgeable and approachable. My essay surpassed all my expectations. I will definitely use their services again.",
    image: "image/scholar.png",
  },
  {
    name: "Henry Brown, Toronto, Canada ",
    stars: 4,
    message:
      "My assignments were delivered on time and fulfilled all requirements. This service has been incredibly helpful during my busy semester.",
    image: "image/scholar.png",
  },
  {
    name: "Arlo Smith, St. John's, Canada ",
    stars: 5,
    message:
      "The writer assigned to my project was exceptionally knowledgeable and provided detailed, well-reasoned content. The entire process was smooth and stress-free.",
    image: "image/scholar.png",
  },
  // Add more testimonials as needed
];
