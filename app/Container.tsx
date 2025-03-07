"use client";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="mx-auto w-[85%] justify-center lg:max-w-full md:max-w-[750px] flex lg:block">
      {children}
    </div>
  );
};

export default Container;
