import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`transition rounded-lg px-4 py-2 bg-purple-500 text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-purple-600 dark:hover:bg-blue-600 shadow-md ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
