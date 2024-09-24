import { motion } from "framer-motion";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";
import image6 from "../../assets/image6.jpg";
import image7 from "../../assets/image7.jpg";
import image8 from "../../assets/image8.jpg";
import vertical1 from "../../assets/vertical1.jpg";
import vertical2 from "../../assets/vertical2.jpg";
import vertical3 from "../../assets/vertical3.jpg";
import Header from "../shared/Title";

const ImageParallax = () => {
  const imageVariants = (direction: string) => ({
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? -100 : direction === "down" ? 100 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  });

  return (
    <div className="py-10">
      <Header header="Our Satisfied Clients" description="" />
      <div className="grid grid-cols-2 gap-4 pt-10 mx-auto max-w-7xl md:grid-cols-4">
        {/* First column */}
        <div className="grid gap-4">
          <motion.img
            className="h-full max-w-full rounded-lg"
            src={image1}
            alt="image1"
            initial="hidden"
            whileInView="visible"
            variants={imageVariants("left")}
          />
          <motion.img
            className="h-full max-w-full rounded-lg"
            src={image2}
            alt="image2"
            initial="hidden"
            whileInView="visible"
            variants={imageVariants("up")}
          />
          <motion.img
            className="h-full max-w-full rounded-lg"
            src={image3}
            alt="image3"
            initial="hidden"
            whileInView="visible"
            variants={imageVariants("right")}
          />
        </div>

        {/* Second column */}
        <div className="grid gap-4">
          <motion.img
            className="h-full max-w-full rounded-lg"
            src={image4}
            alt="image4"
            initial="hidden"
            whileInView="visible"
            variants={imageVariants("down")}
          />
          <motion.img
            className="h-full max-w-full rounded-lg"
            src={vertical1}
            alt="vertical1"
            initial="hidden"
            whileInView="visible"
            variants={imageVariants("left")}
          />
          <motion.img
            className="h-full max-w-full rounded-lg"
            src={image5}
            alt="image5"
            initial="hidden"
            whileInView="visible"
            variants={imageVariants("up")}
          />
        </div>

        {/* Third column */}
        <div className="grid gap-4">
          <motion.img
            className="h-full max-w-full rounded-lg"
            src={vertical2}
            alt="vertical2"
            initial="hidden"
            whileInView="visible"
            variants={imageVariants("right")}
          />
          <motion.img
            className="h-full max-w-full rounded-lg"
            src={image5}
            alt="image5"
            initial="hidden"
            whileInView="visible"
            variants={imageVariants("down")}
          />
          <motion.img
            className="h-full max-w-full rounded-lg"
            src={image6}
            alt="image6"
            initial="hidden"
            whileInView="visible"
            variants={imageVariants("left")}
          />
        </div>

        {/* Fourth column */}
        <div className="grid gap-4">
          <motion.img
            className="h-full max-w-full rounded-lg"
            src={image7}
            alt="image7"
            initial="hidden"
            whileInView="visible"
            variants={imageVariants("up")}
          />
          <motion.img
            className="h-full max-w-full rounded-lg"
            src={vertical3}
            alt="vertical3"
            initial="hidden"
            whileInView="visible"
            variants={imageVariants("right")}
          />
          <motion.img
            className="h-full max-w-full rounded-lg"
            src={image8}
            alt="image8"
            initial="hidden"
            whileInView="visible"
            variants={imageVariants("down")}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageParallax;
