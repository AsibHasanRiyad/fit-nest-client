import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mt-4 mb-4 px-2 max-w-7xl mx-auto sm:mt-6 sm:mb-6 sm:px-4 md:mt-8 md:mb-8 md:px-6 lg:mt-10 lg:mb-10 lg:px-8 xl:mt-12 xl:mb-12 xl:px-10">
      {children}
    </div>
  );
};

export default Container;
