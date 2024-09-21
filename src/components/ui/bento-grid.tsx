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
        "grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto ",
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
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input  p-4 h-full   bg-secondary/80 border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      <img
        className="object-cover w-full overflow-hidden h-full md:h-[250px] rounded-xl"
        src={header}
        alt=""
      />
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div className="mt-2 mb-2 font-sans font-bold text-third">{title}</div>
        <div className="font-sans text-xs font-normal text-third ">
          {description}
        </div>
        <div className="flex justify-end ">
          <Button className=" text-xs bg-primary p-0 px-3 py-1.5 h-fit mt-4">
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};
