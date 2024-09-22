import { ArrowRightCircle, CloudIcon } from "lucide-react";
import heroImage from "../../assets/hero.jpg";
import { TypewriterEffectSmoothDemo } from "./TypeEffect";

const Hero = () => {
  return (
    <>
      <div className=" bg-third min-h-[calc(100vh-175px)] pt-10 lg:pt-0 px-4 md:px-8 flex justify-center items-center">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 lg:w-5/12">
              <div>
                <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-secondary  sm:text-[42px] lg:text-[40px] xl:text-5xl">
                  Transform Your Workout, Transform Your Life
                </h1>
                <p className="mb-8 max-w-[480px] text-text font-medium text-base text-body-color text-dark-6">
                  At FitNest, we believe that everyone deserves to feel strong
                  and confident. Our mission is to provide high-quality gym and
                  fitness products that cater to every fitness enthusiast, from
                  beginners to seasoned athletes.
                </p>
                <ul className="flex flex-wrap items-center">
                  <li>
                    <a
                      href="/#"
                      className="inline-flex items-center justify-center gap-3 px-6 py-3 text-base font-medium text-center rounded-md bg-primary text-third hover:bg-blue-dark lg:px-7"
                    >
                      Explore
                      <ArrowRightCircle className="w-5 h-5 " />
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#"
                      className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-secondary hover:text-primary "
                    >
                      <span className="mr-2">
                        <CloudIcon />
                      </span>
                      Download App
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <TypewriterEffectSmoothDemo />
              </div>
            </div>
            <div className="hidden px-4 lg:block lg:w-1/12"></div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="lg:ml-auto lg:text-right">
                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                  <img
                    src={heroImage}
                    alt="hero"
                    className=" w-fit min-w-[500px] max-h-[600px] rounded-xl rounded-tl-[100px]"
                  />
                  <span className="absolute -bottom-8 -left-8 z-[-1]">
                    <svg
                      width="93"
                      height="93"
                      viewBox="0 0 93 93"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
