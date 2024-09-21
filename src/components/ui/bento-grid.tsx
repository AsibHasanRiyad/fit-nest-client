import { cn } from "@/lib/utils";
import { Button } from "./button";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: string;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input  p-4 h-full  bg-black border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      <img
        className=" w-full  rounded-xl overflow-hidden"
        src={header}
        alt=""
      />
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-third  mb-2 mt-2">{title}</div>
        <div className="font-sans font-normal text-third text-xs ">
          {description}
        </div>
        <div className=" flex justify-end">
          <Button className=" text-xs bg-primary p-0 px-3 py-1.5 h-fit mt-4">
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};
