import Link from "next/link";
import React from "react";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  href,
  children,
  className = "",
  variant = "primary",
  onClick,
}) => {
  const baseStyles =
    "px-6 py-3 rounded-lg text-wrap font-semibold transition-all duration-200 inline-flex items-center justify-center";

  const variantStyles = {
    primary: "bg-[#006D68] text-white hover:bg-[#006D6890]",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    outline:
      "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
  };

  const button = (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );

  if (href) {
    return <Link href={href}>{button}</Link>;
  }

  return button;
};

export default Button;
