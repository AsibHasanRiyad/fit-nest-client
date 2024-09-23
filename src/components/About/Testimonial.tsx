import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const review = [
  {
    name: "John Smith",
    review:
      "Absolutely love this resistance band! It has transformed my workouts and added great variety.",
  },
  {
    name: "Emily Johnson",
    review:
      "The yoga mat is super comfortable and provides excellent grip. Perfect for my daily sessions.",
  },
  {
    name: "Michael Brown",
    review:
      "The dumbbells are solid but a bit bulky for my home gym. Good quality overall.",
  },
  {
    name: "Sarah Davis",
    review:
      "This protein powder tastes amazing and mixes well. I feel great after my workouts!",
  },
  {
    name: "David Wilson",
    review:
      "The jump rope broke after a week. Disappointed with the durability.",
  },
  {
    name: "Sophia Miller",
    review:
      "The foam roller is great for recovery. I use it every day after my workouts.",
  },
  {
    name: "James Taylor",
    review:
      "These workout gloves provide excellent grip and comfort. Highly recommend!",
  },
  {
    name: "Olivia Anderson",
    review:
      "The kettlebell is exactly what I needed. Good weight and easy to handle.",
  },
  {
    name: "Daniel Thomas",
    review:
      "The fitness tracker is decent, but the app could be more user-friendly.",
  },
  {
    name: "Ava Jackson",
    review:
      "I love my new gym bag! It's spacious and stylish, perfect for my gym essentials.",
  },
];

export function Testimonial() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-5xl"
    >
      <CarouselContent className="mx-auto">
        {review.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6 aspect-square">
                  <div className="p-6 rounded-lg ">
                    <p className="leading-loose text-gray-500 ">
                      “{item.review}”
                    </p>
                    <div className="flex items-center mt-6">
                      <div>
                        <h1 className="font-semibold text-primary">
                          {item.name}
                        </h1>
                        <span className="text-sm text-gray-500 ">Customer</span>
                      </div>
                    </div>
                  </div>
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
