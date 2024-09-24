import { Box, History, Search, SquareStack } from "lucide-react";
import Hero from "../assets/hero.jpg";
import { motion } from "framer-motion";
import OurTeam from "@/components/About/OurTeam";
import { Testimonial } from "@/components/About/Testimonial";
import Header from "@/components/shared/Title";
import Contact from "@/components/About/Contact";

const fadeInWithDelay = (delay: number) => ({
  hidden: { opacity: 0, y: -400 },
  show: { opacity: 1, y: 0, transition: { duration: 1, delay } },
});

const AboutUs = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="relative p-6 md:p-16">
        <motion.div
          className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center"
          initial="hidden"
          animate="show"
        >
          <motion.div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
            <nav
              className="grid gap-4 mt-5 md:mt-10"
              aria-label="Tabs"
              role="tablist"
              aria-orientation="vertical"
            >
              <motion.button
                type="button"
                className="p-4 hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-none focus:bg-gray-200 md:p-5 rounded-xl"
                id="tabs-with-card-item-4"
                aria-selected="false"
                data-hs-tab="#tabs-with-card-4"
                aria-controls="tabs-with-card-4"
                role="tab"
                variants={fadeInWithDelay(0)}
              >
                <span className="flex gap-x-6">
                  <Box className="w-28 mt-1.5 text-primary" />
                  <span className="grow">
                    <span className="block text-lg font-semibold text-primary hs-tab-active:text-blue-600">
                      Our Vision
                    </span>
                    <span className="block mt-1 text-secondary">
                      Our vision is to be the leading provider of fitness
                      accessories, known for our commitment to quality and
                      innovation. We aim to create a community where fitness
                      enthusiasts can connect, share, and inspire one another
                      towards achieving their personal goals.
                    </span>
                  </span>
                </span>
              </motion.button>

              <motion.button
                type="button"
                className="p-4 hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-none focus:bg-gray-200 md:p-5 rounded-xl"
                id="tabs-with-card-item-3"
                aria-selected="false"
                data-hs-tab="#tabs-with-card-3"
                aria-controls="tabs-with-card-3"
                role="tab"
                variants={fadeInWithDelay(0.5)}
              >
                <span className="flex gap-x-6">
                  <SquareStack className="w-28 mt-1.5 text-primary" />
                  <span className="grow">
                    <span className="block text-lg font-semibold text-primary hs-tab-active:text-blue-600">
                      Our Mission
                    </span>
                    <span className="block mt-1 text-secondary">
                      At Fitnest, our mission is to inspire individuals to lead
                      healthier lives through accessible fitness solutions. We
                      strive to innovate and deliver high-quality products that
                      motivate and support our customers on their wellness
                      journeys.
                    </span>
                  </span>
                </span>
              </motion.button>

              <motion.button
                type="button"
                className="p-4 hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-none focus:bg-gray-200 md:p-5 rounded-xl"
                id="tabs-with-card-item-2"
                aria-selected="false"
                data-hs-tab="#tabs-with-card-2"
                aria-controls="tabs-with-card-2"
                role="tab"
                variants={fadeInWithDelay(1)}
              >
                <span className="flex gap-x-6">
                  <History className="w-28 mt-1.5 text-primary" />
                  <span className="grow">
                    <span className="block text-lg font-semibold text-primary hs-tab-active:text-blue-600">
                      Our History
                    </span>
                    <span className="block mt-1 text-secondary">
                      Established in 2010, Fitnest began as a small initiative
                      to promote fitness awareness. Over the years, we've grown
                      into a trusted brand, dedicated to providing quality
                      fitness accessories that meet the evolving needs of our
                      community.
                    </span>
                  </span>
                </span>
              </motion.button>

              <motion.button
                type="button"
                className="p-4 hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-none focus:bg-gray-200 md:p-5 rounded-xl"
                id="tabs-with-card-item-1"
                aria-selected="true"
                data-hs-tab="#tabs-with-card-1"
                aria-controls="tabs-with-card-1"
                role="tab"
                variants={fadeInWithDelay(1.5)}
              >
                <span className="flex gap-x-6">
                  <Search className="w-28 mt-1.5 text-primary" />
                  <span className="grow">
                    <span className="block text-lg font-semibold text-primary hs-tab-active:text-blue-600">
                      About Fitnest
                    </span>
                    <span className="block mt-1 text-secondary">
                      Founded with a passion for fitness and wellness, Fitnest
                      aims to empower individuals on their fitness journeys. Our
                      carefully curated range of accessories is designed to
                      enhance your workouts and help you achieve your goals.
                    </span>
                  </span>
                </span>
              </motion.button>
            </nav>
          </motion.div>

          {/* Image Section */}
          <motion.div className="lg:col-span-6">
            <div className="relative">
              <div>
                <img
                  className="shadow-xl shadow-gray-200 xl:min-w-[600px] object-cover rounded-xl"
                  src={Hero}
                  alt="Features Image"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* our team */}
      <OurTeam />

      {/* Testimonials */}
      <Header header="Testimonials" description="What our clients are saying" />
      <div className="flex justify-center gap-10 mt-10">
        <Testimonial />
      </div>

      {/* Contact */}
      <Contact />
    </div>
  );
};

export default AboutUs;
