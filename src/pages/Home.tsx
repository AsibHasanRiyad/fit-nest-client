import { motion } from "framer-motion";
import { Category } from "@/components/Home/Category";
import Hero from "../components/Home/Hero";
import Container from "../components/ui/Container";
import FeaturedProducts from "@/components/Home/FeaturedProducts";
import ImageParallax from "@/components/Home/ImageParallax";
import Benefits from "@/components/Home/Benefits";

// Animation variants for scrolling effects
const fadeInVariants = (direction: string) => ({
  hidden: {
    opacity: 0,
    y: direction === "left" ? -120 : 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "linear" },
  },
});

const Home = () => {
  return (
    <Container>
      <Hero />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={fadeInVariants("left")}
      >
        <Category />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        variants={fadeInVariants("left")}
      >
        <FeaturedProducts />
      </motion.div>
      <ImageParallax />
      <Benefits />
    </Container>
  );
};

export default Home;
