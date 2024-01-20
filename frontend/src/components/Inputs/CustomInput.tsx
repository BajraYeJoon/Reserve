// DateInput.tsx
import React from "react";

interface CustomInputProps {
  label: string;
  value: string;
  type: "date" | "text";
  onChange: (value: string) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  value,
  onChange,
  type,
}) => (
  <label>
    <p className="text-xs md:text-sm font-light">{label}</p>
    <div className="max-w-md">
      <input
        type={type}
        className="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-min px-2.5 md:px-4 py-2 border-gray-600 md:my-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Your Name"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  </label>
);

export default CustomInput;
