import { motion } from "framer-motion";

export function ProductCardSkeleton() {
  return (
    <div>
      <div className="w-full relative rounded-3xl overflow-hidden max-w-md mx-auto bg-gradient-to-r from-[#1D2235] to-[#121318] p-8 ">
        <div className="relative z-10">
          {/* Placeholder for image */}
          <div className="w-full h-64 bg-neutral-700 rounded-2xl animate-pulse"></div>

          <motion.div
            className="relative z-20 py-4"
            animate={{ filter: "blur(0px)" }}
          >
            <div className="w-3/4 h-8 mb-4 rounded-md bg-neutral-600 animate-pulse"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-neutral-600 animate-pulse"></div>
              <div className="w-1/4 h-6 rounded-md bg-neutral-600 animate-pulse"></div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="w-full h-4 rounded-md bg-neutral-600 animate-pulse"></div>
              <div className="w-full h-4 rounded-md bg-neutral-600 animate-pulse"></div>
              <div className="w-3/4 h-4 rounded-md bg-neutral-600 animate-pulse"></div>
            </div>
          </motion.div>

          {/* Placeholder for the button */}
          <div className="flex items-center justify-end mt-4">
            <div className="w-24 rounded-lg h-7 bg-primary animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
