import Header from "../shared/Title";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { Button } from "../ui/button";

export function FeaturedProducts() {
  return (
    <div className=" mt-10">
      <Header
        header="Featured Products"
        description="Discover our handpicked selection of cutting-edge fitness equipment designed to elevate your workout experience."
      />
      <BentoGrid className="container max-w-5xl mx-auto mt-14 ">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={
              i === 3 || i === 6
                ? "md:col-span-2 cursor-pointer"
                : " cursor-pointer"
            }
          />
        ))}
      </BentoGrid>
      <div className=" flex justify-center items-center py-10">
        <Button className=" bg-primary hover:bg-primary/90">See More</Button>
      </div>
    </div>
  );
}

const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header:
      "https://i.ibb.co.com/T8FQN9f/gastro-editorial-v-Cz-RMEDMZus-unsplash.jpg",
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header:
      "https://i.ibb.co.com/T8FQN9f/gastro-editorial-v-Cz-RMEDMZus-unsplash.jpg",
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header:
      "https://i.ibb.co.com/T8FQN9f/gastro-editorial-v-Cz-RMEDMZus-unsplash.jpg",
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header:
      "https://i.ibb.co.com/0VG5rpd/kelly-sikkema-IZOAOjvwha-M-unsplash.jpg",
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header:
      "https://i.ibb.co.com/T8FQN9f/gastro-editorial-v-Cz-RMEDMZus-unsplash.jpg",
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header:
      "https://i.ibb.co.com/T8FQN9f/gastro-editorial-v-Cz-RMEDMZus-unsplash.jpg",
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header:
      "https://i.ibb.co.com/T8FQN9f/gastro-editorial-v-Cz-RMEDMZus-unsplash.jpg",
  },
];
