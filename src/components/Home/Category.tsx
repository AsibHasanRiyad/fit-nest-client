/* eslint-disable react-refresh/only-export-components */
import Header from "../shared/Title";
import { HoverEffect } from "../ui/card-hover-effect";
interface Project {
  title: string;
  description: string;
  link: string;
  image: string;
}

export function Category() {
  return (
    <div>
      <Header header="Shop by Category" description="" />
      <div className="px-8 mx-auto max-w-7xl">
        <HoverEffect className=" mt-14" items={projects} />
      </div>
    </div>
  );
}
export const projects: Project[] = [
  {
    title: "Treadmill",
    description:
      "An essential cardio machine that helps improve cardiovascular fitness and endurance, suitable for running or walking indoors.",
    link: "/products?category=Treadmill",
    image:
      "https://i.ibb.co.com/GJDCJrN/youcef-chenzer-Zwrrfoh4-VSM-unsplash.jpg",
  },
  {
    title: "Dumbbells",
    description:
      "Versatile weights that can be used for a variety of strength training exercises, perfect for home workouts and outside too.",
    link: "/products?category=Dumbbells",
    image:
      "https://i.ibb.co.com/9HZrc6J/vd-photography-v9-QOeuh6qog-unsplash.jpg",
  },

  {
    title: "Resistance Bands",
    description:
      "Portable bands that add resistance to your workouts, perfect for strength training, stretching, and rehabilitation exercises.",
    link: "/products?category=Resistance Bands",
    image:
      "https://i.ibb.co.com/0VG5rpd/kelly-sikkema-IZOAOjvwha-M-unsplash.jpg",
  },
  {
    title: "Weight Plates",
    description:
      "A versatile weight that combines the benefits of cardio and strength training, ideal for full-body workouts.",
    link: "/products?category=Weight Plates",
    image:
      "https://i.ibb.co.com/3NZD7Lr/victor-freitas-Jb-I04n-Yfa-Jk-unsplash.jpg",
  },
  {
    title: "Exercise Bike",
    description:
      "A great option for low-impact cardiovascular workouts, perfect for building endurance and burning calories.",
    link: "/products?category=Exercise Bike",
    image:
      "https://i.ibb.co.com/T8FQN9f/gastro-editorial-v-Cz-RMEDMZus-unsplash.jpg",
  },
];
