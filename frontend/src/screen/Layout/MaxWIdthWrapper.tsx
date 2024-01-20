import { ReactNode } from "react";

export const MaxWidthWrapper = ({
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div className="flex mx-auto items-center flex-col px-2.5 max-w-screen-xl ">
      {children}
    </div>
  );
};
