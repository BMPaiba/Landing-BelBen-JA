import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/data";

const CarouselComponent = () =>  {
  return (
    <Carousel className="w-full max-w-lg m-auto bg-lightGreen mt-8">
      <CarouselContent>
        {testimonials.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img src={image} alt={`Testimonio ${index + 1}`} className="object-cover w-full h-full" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default CarouselComponent