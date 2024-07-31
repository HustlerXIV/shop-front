import React, { CSSProperties, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  style,
  className = "",
}) => {
  return (
    <div
      style={style}
      className={`w-full max-w-6xl mx-auto px-4 py-4 box-border ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
