import { useState } from "react";
import { Lens } from "../ui/lens";

import { motion } from "framer-motion";

import { Product } from "@/types";
import { GoArrowRight } from "react-icons/go";

import { Button } from "../ui/button";
import { CircleDollarSign, Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";

export function ProductCard({ product }: { product: Product }) {
  const [hovering, setHovering] = useState(false);

  return (
    <div>
      <div className="w-full h-full relative rounded-3xl overflow-hidden max-w-md mx-auto bg-gradient-to-r from-[#1D2235] to-[#121318] p-4 ">
        <div className="relative z-10">
          <Lens hovering={hovering} setHovering={setHovering}>
            <img
              src={product.image}
              alt="image"
              className="object-cover w-full h-40 rounded-2xl"
            />
          </Lens>
          <motion.div
            animate={{
              filter: hovering ? "blur(2px)" : "blur(0px)",
            }}
            className="relative z-20 py-3"
          >
            <h2 className="text-xl font-bold text-left text-white">
              {product.name}
            </h2>
            <p className="flex items-center justify-start gap-2 mt-4 text-sm text-left text-neutral-200">
              <Dumbbell className=" text-primary size-5" />
              {product.category}
            </p>
            <p className="flex items-center justify-start gap-2 mt-4 text-sm text-left text-neutral-200">
              <CircleDollarSign className=" text-primary size-5" />
              {product.price}
            </p>
            <p className="flex items-center justify-start gap-2 mt-4 text-sm text-left text-neutral-200">
              <CircleDollarSign className=" text-primary size-5" />
              {product.category}
            </p>
          </motion.div>
          <div className="flex items-center justify-end ">
            <Link to={`/products/${product._id}`}>
              <Button
                variant="expandIcon"
                Icon={GoArrowRight}
                iconPlacement="right"
                className="p-0 px-3 py-1 h-fit bg-primary text-third hover:bg-primary/90"
              >
                See More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
