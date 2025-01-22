import { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  text: string;
  startIcon?: ReactElement;
  onClick?: () => void;
  fullWidth?: boolean;
  loading?: boolean;
}

const variantClasses = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-200 text-purple-600",
};

const defaultSyles =
  "px-4 py-2 rounded-md font-light flex items-center justify-center";

export function Button({
  variant,
  text,
  startIcon,
  onClick,
  fullWidth,
  loading,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${variantClasses[variant]} ${defaultSyles} ${
        fullWidth ? "w-full flex justify-center" : ""
      } ${loading ? "opacity-75" : ""}`}
      disabled={loading}
    >
      <div className="pr-2"> {startIcon}</div>

      {text}
    </button>
  );
}
