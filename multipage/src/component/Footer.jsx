import { useGlobalContext } from "../context/context";

export const Footer = () => {
  const {
    page,
    setPage,
    personInfo,
    addOn,
    setRequired,
    plan,
    status,
  } = useGlobalContext();
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
      } p-5 w-[full] h-[80px] bg-white`}
    >
      {page !== 1 && (
        <button
          className="pointer text-gray-400  text-start  rounded-md h-[40px] w-[100px]"
          onClick={handlePrevBtn}
        >
          Go Back
        </button>
      )}
      <button
        className="pointer bg-[#02295a]  text-[#f0f6ff] text-[0.9rem] rounded-md h-[40px] w-[100px]"
        onClick={handleNextBtn}
      >
        Next Step
      </button>
    </section>
  );
};
