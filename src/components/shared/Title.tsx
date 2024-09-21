const Header = ({
  header,
  description,
}: {
  header: string;
  description: string;
}) => {
  return (
    <div className="mx-auto w-full flex justify-start items-center px-4 pt-20">
      <div className="border-l-[5px] border-primary pl-5">
        <h2 className="mb-2 text-4xl font-semibold text-secondary ">
          {header}
        </h2>
        <p className="text-sm font-medium text-text text-body-color ">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Header;
