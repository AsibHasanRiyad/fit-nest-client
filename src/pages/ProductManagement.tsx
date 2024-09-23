import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Header from "@/components/shared/Title";
import Loader from "@/components/shared/Loader";
import ProductTable from "@/components/ProductManagement/ProductTable";

const ProductManagement = () => {
  // const { data, isLoading, isFetching, refetch } =
  //   useGetAllServicesQuery(undefined);

  // if (isLoading || isFetching) {
  //   return <Loader />;
  // }
  return (
    <div className="overflow-scroll max-w-[100vw] lg:px-10 hide-scrollbar">
      <div className="mt-5 ">
        <Header header="Product Management" description="" />
      </div>
      <div className="flex justify-end mb-5 lg:mr-14 ">
        {/* <CreateService refetch={refetch} /> */}
      </div>
      <Table className="text-base text-gray-100 ">
        <TableHeader>
          <TableRow className=" hover:bg-transparent">
            <TableHead>Service Name</TableHead>
            <TableHead>Details</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Edit</TableHead>
            <TableHead>Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* {data?.data?.map((service) => (
            <ProductTable service={service} key={service._id} />
          ))} */}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductManagement;
