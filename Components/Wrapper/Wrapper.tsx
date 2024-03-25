import React, { Children } from "react";

const Wrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`w-full max-w-[1200p] xl:max-w-[1450px] mx-auto px-5 md:px-10 ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
