import { TableCell, TableRow } from "@/components/ui/table";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";

import { Button } from "@/components/ui/button";

import "./style.css";
import Loader from "../shared/Loader";
import { UpdateProduct } from "./UpdateProduct";
import { DeleteProduct } from "./DeleteProduct";
import { truncateDescription } from "@/utils/Truncate";
import { Product } from "@/types";

const ProductTable = ({ service }: { service: Product }) => {
  const { shortDescription, isTruncated } = truncateDescription(
    service?.description || ""
  );

  if (!service) {
    return <Loader />;
  }
  return (
    <>
      <TableRow className=" hover:bg-transparent" key={service._id}>
        <TableCell className="font-medium w-52">{service.name}</TableCell>
        {/* <TableCell className="w-2/5 ">{service.description}</TableCell> */}
        <TableCell className="w-full lg:w-2/5">
          {shortDescription}{" "}
          {isTruncated && (
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button
                  variant="link"
                  className="px-0 text-blue-500 hover:underline"
                >
                  See More
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 bg-secondary text-neutral-400">
                <div className="space-y-2 ">
                  <p className="text-sm">{service?.description}</p>
                </div>
              </HoverCardContent>
            </HoverCard>
          )}
        </TableCell>
        <TableCell className=" whitespace-nowrap">
          {service.duration} Minutes
        </TableCell>
        <TableCell className=" whitespace-nowrap">$ {service.price}</TableCell>
        <TableCell>
          <UpdateProduct service={service as Product} />
        </TableCell>
        <TableCell>
          {" "}
          <DeleteProduct id={service._id as string} />
        </TableCell>
      </TableRow>
    </>
  );
};

export default ProductTable;
