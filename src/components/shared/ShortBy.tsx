import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
interface selectSortProps {
  handleSelectSort: (data: string) => void;
}
export function SortBy({ handleSelectSort }: selectSortProps) {
  return (
    <Select onValueChange={(value) => handleSelectSort(value)}>
      <SelectTrigger className=" w-[180px] sm:w-[300px] 2xl:w-[250px] ">
        <SelectValue placeholder="Best Match" />
      </SelectTrigger>
      <SelectContent className="pr-5 font-medium text-black">
        <SelectGroup>
          <SelectItem value="price">Price Low to High</SelectItem>
          <SelectItem value="-price">Price High to Low</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
