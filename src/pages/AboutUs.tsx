import { Box, History, Search, SquareStack } from "lucide-react";
import Hero from "../assets/hero.jpg";

import OurTeam from "@/components/About/OurTeam";
import { Testimonial } from "@/components/About/Testimonial";
import Header from "@/components/shared/Title";
const AboutUs = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="relative p-6 md:p-16">
        <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
          <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
            <nav
              className="grid gap-4 mt-5 md:mt-10"
              aria-label="Tabs"
              role="tablist"
              aria-orientation="vertical"
            >
              <button
                type="button"
                className="p-4 hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-none focus:bg-gray-200 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 active"
                id="tabs-with-card-item-1"
                aria-selected="true"
                data-hs-tab="#tabs-with-card-1"
                aria-controls="tabs-with-card-1"
                role="tab"
              >
                <span className="flex gap-x-6">
                  <Search className="w-28 mt-1.5 text-primary " />
                  <span className="grow">
                    <span className="block text-lg font-semibold text-primary hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-500 ">
                      About Fitnest
                    </span>
                    <span className="block mt-1 text-secondary dark:hs-tab-active:text-gray-200 ">
                      Founded with a passion for fitness and wellness, Fitnest
                      aims to empower individuals on their fitness journeys. Our
                      carefully curated range of accessories is designed to
                      enhance your workouts and help you achieve your goals.
                    </span>
                  </span>
                </span>
              </button>

              <button
                type="button"
                className="p-4 hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-none focus:bg-gray-200 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                id="tabs-with-card-item-2"
                aria-selected="false"
                data-hs-tab="#tabs-with-card-2"
                aria-controls="tabs-with-card-2"
                role="tab"
              >
                <span className="flex gap-x-6">
                  <History className="w-28 mt-1.5 text-primary " />
                  <span className="grow">
                    <span className="block text-lg font-semibold text-primary hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-500 ">
                      Our History
                    </span>
                    <span className="block mt-1 text-secondary dark:hs-tab-active:text-gray-200 ">
                      Established in 2010, Fitnest began as a small initiative
                      to promote fitness awareness. Over the years, we've grown
                      into a trusted brand, dedicated to providing quality
                      fitness accessories that meet the evolving needs of our
                      community.
                    </span>
                  </span>
                </span>
              </button>

              <button
                type="button"
                className="p-4 hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-none focus:bg-gray-200 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                id="tabs-with-card-item-3"
                aria-selected="false"
                data-hs-tab="#tabs-with-card-3"
                aria-controls="tabs-with-card-3"
                role="tab"
              >
                <span className="flex gap-x-6">
                  <SquareStack className="w-28 mt-1.5 text-primary " />
                  <span className="grow">
                    <span className="block text-lg font-semibold text-primary hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-500 ">
                      Our Mission
                    </span>
                    <span className="block mt-1 text-secondary dark:hs-tab-active:text-gray-200 ">
                      At Fitnest, our mission is to inspire individuals to lead
                      healthier lives through accessible fitness solutions. We
                      strive to innovate and deliver high-quality products that
                      motivate and support our customers on their wellness
                      journeys.
                    </span>
                  </span>
                </span>
              </button>
              <button
                type="button"
                className="p-4 hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-none focus:bg-gray-200 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                id="tabs-with-card-item-3"
                aria-selected="false"
                data-hs-tab="#tabs-with-card-3"
                aria-controls="tabs-with-card-3"
                role="tab"
              >
                <span className="flex gap-x-6">
                  <Box className="w-28 mt-1.5 text-primary " />
                  <span className="grow">
                    <span className="block text-lg font-semibold text-primary hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-500 ">
                      Our Vision
                    </span>
                    <span className="block mt-1 text-secondary dark:hs-tab-active:text-gray-200 ">
                      Our vision is to be the leading provider of fitness
                      accessories, known for our commitment to quality and
                      innovation. We aim to create a community where fitness
                      enthusiasts can connect, share, and inspire one another
                      towards achieving their personal goals.
                    </span>
                  </span>
                </span>
              </button>
            </nav>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              <div>
                <div
                  id="tabs-with-card-1"
                  role="tabpanel"
                  aria-labelledby="tabs-with-card-item-1"
                >
                  <img
                    className="shadow-xl shadow-gray-200 xl:min-w-[600px] object-cover rounded-xl dark:shadow-gray-900/20"
                    src={Hero}
                    alt="Features Image"
                  />
                </div>

                <div
                  id="tabs-with-card-2"
                  className="hidden"
                  role="tabpanel"
                  aria-labelledby="tabs-with-card-item-2"
                >
                  <img
                    className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20"
                    src="https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=720&q=80"
                    alt="Features Image"
                  />
                </div>

                <div
                  id="tabs-with-card-3"
                  className="hidden"
                  role="tabpanel"
                  aria-labelledby="tabs-with-card-item-3"
                >
                  <img
                    className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20"
                    src="https://images.unsplash.com/photo-1598929213452-52d72f63e307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=720&q=80"
                    alt="Features Image"
                  />
                </div>
              </div>

              <div className="absolute top-0 hidden translate-x-20 end-0 md:block lg:translate-x-20">
                <svg
                  className="w-16 h-auto text-orange-500"
                  width="121"
                  height="135"
                  viewBox="0 0 121 135"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                    stroke="currentColor"
                    stroke-width="10"
                    stroke-linecap="round"
                  />
                  <path
                    d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                    stroke="currentColor"
                    stroke-width="10"
                    stroke-linecap="round"
                  />
                  <path
                    d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                    stroke="currentColor"
                    stroke-width="10"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 grid grid-cols-12 size-full">
          <div className="w-full bg-gray-100 col-span-full lg:col-span-7 lg:col-start-6 h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-neutral-800"></div>
        </div>
      </div>
      {/* our team */}
      <OurTeam />
      <Header header="Testimonials" description="What our clients are saying" />
      <div className="flex justify-center gap-10 mt-10 ">
        <Testimonial />
      </div>
    </div>
  );
};

export default AboutUs;
