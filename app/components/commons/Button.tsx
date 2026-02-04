import Link from "next/link";
import React from "react";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline";
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  href,
  children,
  type = "button",
  className = "",
  variant = "primary",
  onClick,
  disabled = false,
}) => {
  const baseStyles =
    "px-6 py-3 rounded-lg text-wrap font-semibold transition-all duration-200 inline-flex items-center justify-center";

  const variantStyles = {
    primary: "bg-[#006D68] text-white hover:bg-[#006D6890]",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    outline:
      "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
  };

  const disabledStyles = "opacity-60 cursor-not-allowed pointer-events-none";

  const button = (
    <button
      type={type}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${
        disabled ? disabledStyles : ""
      } ${className}`}
    >
      {children}
    </button>
  );

  // ⚠️ Links cannot be truly disabled — we block interaction visually
  if (href) {
    return (
      <Link
        href={disabled ? "#" : href}
        aria-disabled={disabled}
        className={disabled ? "pointer-events-none" : ""}
      >
        {button}
      </Link>
    );
  }

  return button;
};

export default Button;
