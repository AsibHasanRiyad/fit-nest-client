/* eslint-disable react-refresh/only-export-components */
import Header from "../shared/Title";
import treadmill from "../../assets/trademill.jpg";
import dumbell from "../../assets/dumbell.jpg";
import exercise_bike from "../../assets/exercise-bike.jpg";
import weight from "../../assets/weight-plates.jpg";
import resistance from "../../assets/resistance.jpg";
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
    image: treadmill,
  },
  {
    title: "Dumbbells",
    description:
      "Versatile weights that can be used for a variety of strength training exercises, perfect for home workouts and outside too.",
    link: "/products?category=Dumbbells",
    image: dumbell,
  },

  {
    title: "Resistance Bands",
    description:
      "Portable bands that add resistance to your workouts, perfect for strength training, stretching, and rehabilitation exercises.",
    link: "/products?category=Resistance Bands",
    image: resistance,
  },
  {
    title: "Weight Plates",
    description:
      "A versatile weight that combines the benefits of cardio and strength training, ideal for full-body workouts.",
    link: "/products?category=Weight Plates",
    image: weight,
  },
  {
    title: "Exercise Bike",
    description:
      "A great option for low-impact cardiovascular workouts, perfect for building endurance and burning calories.",
    link: "/products?category=Exercise Bike",
    image: exercise_bike,
  },
];
