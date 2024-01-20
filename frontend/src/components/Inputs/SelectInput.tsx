// SelectInput.tsx
import React from "react";

interface SelectInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  value,
  onChange,
  options,
}) => (
  <label className="flex flex-col">
    <p className="text-xs md:text-sm font-light">{label}</p>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-min px-2.5 md:px-4 py-2 border-gray-600 md:my-2 focus:ring-blue-500 focus:border-blue-500"
    >
      <option value="">Select room type</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </label>
);

export default SelectInput;
