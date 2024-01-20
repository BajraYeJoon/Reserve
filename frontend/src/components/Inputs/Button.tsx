interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button = ({ label, onClick, disabled = false }: ButtonProps) => (
  <button
    type="button"
    className={`text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 ${
      disabled
        ? "opacity-100 cursor-not-allowed"
        : "cursor-pointer hover:opacity-55"
    } rounded-lg text-sm px-5 py-2.5 md:py-4 text-center mb-2 md:text-base font-bold transition ease-in-out`}
    onClick={onClick}
    disabled={disabled}
  >
    {label}
  </button>
);

export default Button;
