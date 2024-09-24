import { TableCell, TableRow } from "@/components/ui/table";

import "./style.css";
import Loader from "../shared/Loader";
import { UpdateProduct } from "./UpdateProduct";
import { DeleteProduct } from "./DeleteProduct";

import { Product } from "@/types";
import { Activity } from "lucide-react";

const ProductTable = ({ product }: { product: Product }) => {
  if (!product) {
    return <Loader />;
  }
  return (
    <>
      <TableRow
        className=" hover:bg-transparent text-secondary"
        key={product._id}
      >
        <TableCell className="font-medium w-52">{product.name}</TableCell>

        <TableCell className="w-full lg:w-2/5">{product.description}</TableCell>
        <TableCell>{product.category}</TableCell>
        <TableCell className="flex items-center gap-2 ">
          {" "}
          <Activity /> {product.stockQuantity}
        </TableCell>

        <TableCell className=" whitespace-nowrap">$ {product.price}</TableCell>
        <TableCell>
          <UpdateProduct product={product as Product} />
        </TableCell>
        <TableCell>
          {" "}
          <DeleteProduct id={product._id as string} />
        </TableCell>
      </TableRow>
    </>
  );
};

export default ProductTable;
