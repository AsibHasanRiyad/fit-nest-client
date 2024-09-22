import { useEffect, useState } from "react";
import { DualRangeSlider } from "../ui/dual-range-slider";

interface PriceRangeProps {
  onPriceRangeChange: (min: number, max: number) => void;
}

const PriceRange = ({ onPriceRangeChange }: PriceRangeProps) => {
  const [values, setValues] = useState([0, 1000]);

  useEffect(() => {
    onPriceRangeChange(values[0], values[1]);
  }, [values, onPriceRangeChange]);

  return (
    <div className="w-48 2xl:w-[250px] mr-4 space-y-5 md:mr-0 sm:w-72">
      <DualRangeSlider
        label={(value) => <span>{value}</span>}
        value={values}
        onValueChange={setValues}
        min={0}
        max={1000}
        step={1}
        className="text-primary"
      />
    </div>
  );
};

export default PriceRange;
