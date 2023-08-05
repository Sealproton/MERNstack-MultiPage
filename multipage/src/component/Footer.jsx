import { useGlobalContext } from "../context/context";

export const Footer = () => {
  const { page, setPage, personInfo, addOn, setRequired, plan, status } =
    useGlobalContext();
  const handleNextBtn = () => {
    if (
      personInfo.name === "" ||
      personInfo.email === "" ||
      personInfo.phone === ""
    ) {
      setRequired(true);
      setPage(page);
    } else {
      setRequired(false);
      setPage(page + 1);
      console.log(personInfo);
      console.log(status);
      console.log(plan);
      console.log(addOn);
    }
  };

  const handlePrevBtn = () => {
    setPage(page - 1);
  };
  return (
    <section
      className={`flex items-center ${
        page === 1 ? "justify-end" : "justify-between"
      } ${
        page === 5 && "hidden"
      } p-5 w-[full] h-[80px] bg-white lg:h-[20px] lg:pr-20`}
    >
      {page !== 1 && (
        <button
          className="pointer text-gray-400  text-start  rounded-md h-[40px] w-[100px] lg:font-bold"
          onClick={handlePrevBtn}
        >
          Go Back
        </button>
      )}
      <button
        className={`pointer ${
          page === 4 ? "bg-[#473dff]" : "bg-[#02295a]"
        }  text-[#f0f6ff] text-[0.9rem] rounded-md h-[40px] w-[100px] lg:h-[55px] lg:w-[120px] lg:text-[1.2rem]`}
        onClick={handleNextBtn}
      >
        {page === 4 ? "Confirm" : "Next Step"}
      </button>
    </section>
  );
};
