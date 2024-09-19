import AiToolDescription from "./components";

const AiTools = async () => {

  return (
    <div className="py-8 px-4">
      <div className="grid gap-[8.99px] max-w-7xl mx-auto md:gap-[16.67px] border md:border-[.83px] border-solid border-[#80808040] rounded-[4.5px] sm:rounded-[16.67px] py-4 sm:py-8 px-4 sm:px-5 mb-10 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
        <h1 className="text-[1.5rem] md:text-[2.5rem] leading-[29.28px] md:leading-12 font-medium">
          Welcome to AI Tools
        </h1>
        <p className="text-xs md:text-base text-[#808080] leading-6 md:leading-8 font-medium">
          Understanding what AI to use and for what purpose in Architecture.
        </p>
      </div>
      <AiToolDescription />
    </div>
  );
};

export default AiTools;