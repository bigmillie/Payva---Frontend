import React from "react";
import Logo from "./Logo";

interface HeadingTagProps {
  children: React.ReactNode;
  className?: string;
}

const HeadingTag: React.FC<HeadingTagProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`
        inline-flex
        items-center
        gap-1
        rounded-full
        border-[2.59px]
        border-[#006D68]
        bg-[#E9FBF9]
        px-6
        py-3
        ${className}
      `}
    >
      <Logo type="secondary" className="w-2 h-2 md:w-3 md:h-3" />

      <h2 className="text-[#4B4B4B] text-sm md:text-lg font-bold leading-none">
        {children}
      </h2>
    </div>
  );
};

export default HeadingTag;
