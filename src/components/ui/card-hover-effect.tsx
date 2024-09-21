/* eslint-disable prefer-const */
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

import { useState } from "react";
import { Link } from "react-router-dom";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    image: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-2  ",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          to={item?.link}
          key={item?.link}
          className="relative block w-full h-full p-2 group"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 block w-full h-full bg-secondary/20 rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card image={item.image}>
            <CardTitle className="text-2xl text-third">{item.title}</CardTitle>
            <CardDescription className="text-base text-white ">
              {item.description}
            </CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
  image,
}: {
  className?: string;
  children: React.ReactNode;
  image: string;
}) => {
  return (
    <div
      className={cn(
        `relative rounded-2xl h-full w-full  overflow-hidden border border-transparent  bg-cover bg-center`,
        className
      )}
      style={{ backgroundImage: `url(${image})` }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
        whileHover={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.3 }}
        className="relative z-20"
      >
        <div className="w-full p-4 h-60 bg-secondary/40 rounded-xl">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
