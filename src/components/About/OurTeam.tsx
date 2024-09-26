import { useRef } from "react";
import Header from "../shared/Title";
import { motion, useInView } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const teamMembers = [
  {
    name: "Ahmed Omer",
    role: "CEO",
    img: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&auto=format&fit=crop&w=739&q=80",
    description:
      "Ahmed is a visionary leader with over 10 years of experience in the fitness industry. He is passionate about creating innovative solutions that empower individuals to achieve their health goals.",
  },
  {
    name: "Jane Doe",
    role: "Co-founder",
    img: "https://i.ibb.co.com/2cj4p63/Team-Card-3.png",
    description:
      "Jane is a fitness enthusiast and entrepreneur, dedicated to building a community that encourages healthy living. With a background in nutrition and wellness, she leads our outreach initiatives.",
  },
  {
    name: "Steve Ben",
    role: "Marketer",
    img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&auto=format&fit=crop&w=731&q=80",
    description:
      "Steve is a marketing specialist with a knack for digital strategies. His creative campaigns have driven growth and engagement, making him an invaluable asset to our team.",
  },
  {
    name: "Patterson Johnson",
    role: "Software Engineer",
    img: "https://i.ibb.co.com/vX2Djxk/Team-Card-4.png",
    description:
      "Patterson is a talented software engineer who loves building user-friendly applications. His passion for technology and innovation helps drive our platform forward.",
  },
];

const OurTeam = () => {
  const isSmallDevice = useMediaQuery({ query: "(max-width: 640px)" }); // Define your small device breakpoint
  const fadeInWithDelay = (delay: number) => ({
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, delay } },
  });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section>
      <motion.div
        initial="hidden"
        animate="show"
        className="container px-6 py-8 mx-auto"
      >
        <Header header="Our Team" description="Meet our teammates" />

        <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {teamMembers.map((member, index) => {
            return (
              <motion.div
                key={index}
                ref={ref}
                variants={fadeInWithDelay(index * 0.3)}
                animate={isSmallDevice ? "show" : isInView ? "show" : "hidden"} // Disable animation for small devices
                className="w-full max-w-xs text-center"
              >
                <img
                  className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                  src={member.img}
                  alt={member.name}
                />
                <div className="mt-2">
                  <h3 className="text-lg font-medium text-gray-700">
                    {member.name}
                  </h3>
                  <span className="mt-1 font-medium text-gray-600">
                    {member.role}
                  </span>
                  <p className="mt-2 text-gray-500">{member.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default OurTeam;
