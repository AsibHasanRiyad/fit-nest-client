import { Dumbbell, Settings2, Sparkles } from "lucide-react";

const Benefits = () => {
  return (
    <section className="bg-transparent">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          discover our <br /> amazing{" "}
          <span className="text-primary">Gym Accessories</span>
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
          <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
            <span className="inline-block p-3 rounded-full bg-primary ">
              <Dumbbell className=" text-third" />
            </span>

            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
              High-Quality Accessories
            </h1>

            <p className="text-gray-500 dark:text-gray-300">
              Fitnest offers top-tier gym accessories, from resistance bands to
              dumbbells, ensuring durability and comfort for your workouts.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
            <span className="inline-block p-3 text-white rounded-full bg-primary ">
              <Settings2 />
            </span>

            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
              Ready to Use, No Setup Needed
            </h1>

            <p className="text-gray-500 dark:text-gray-300">
              Our accessories are easy to integrate into your routine with zero
              configuration required—grab and go for your next workout!
            </p>
          </div>

          <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
            <span className="inline-block p-3 text-white rounded-full bg-primary ">
              <Sparkles />
            </span>

            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
              Sleek & Functional Design
            </h1>

            <p className="text-gray-500 dark:text-gray-300">
              Our accessories not only perform great but look stylish in any gym
              environment, combining functionality with modern aesthetics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
