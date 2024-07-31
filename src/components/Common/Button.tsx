import { ORANGE, GRAY } from "@/utils/constants";
import React, { FC } from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  danger?: boolean;
}

const Button: FC<ButtonProps> = ({ label, onClick, danger }) => {
  const buttonColor = danger ? GRAY : ORANGE;
  return (
    <button
      style={{
        color: "white",
        background: buttonColor,
        width: "110px",
        borderRadius: "8px",
        padding: "4px",
        fontWeight: "bold",
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
