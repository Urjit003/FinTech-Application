import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface selectComponentData {
  label: string;
  value: string;
}
interface SelectComponent {
  data: Array<selectComponentData>;
  placeholder?: string;
  className?: string;
}
const SelectComponent = ({
  data,
  placeholder,
  className = "w-[180px]",
}: SelectComponent) => {
  return (
    <Select>
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder}/>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {data.map((item: selectComponentData) => {
            return (
              <SelectItem key={item.label} value={item.value}>
                {item.label}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectComponent;
