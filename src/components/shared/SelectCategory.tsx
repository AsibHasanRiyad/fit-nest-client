import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const categories = [
  "Dumbbells",
  "Resistance Bands",
  "Weight Plates",
  "Exercise Bike",
  "Treadmill",
];

export function SelectCategory({
  selectedCategories,
  onCategoryChange,
}: {
  selectedCategories: string[];
  onCategoryChange: (category: string, isChecked: boolean) => void;
}) {
  return (
    <div className="space-y-2 ">
      {categories.map((category) => (
        <div key={category} className="flex items-center space-x-2">
          <Checkbox
            className=" border-primary"
            id={category}
            checked={selectedCategories.includes(category)}
            onCheckedChange={(isChecked) =>
              onCategoryChange(category, isChecked as boolean)
            }
          />
          <Label className=" text-primary/90" htmlFor={category}>
            {category}
          </Label>
        </div>
      ))}
    </div>
  );
}
