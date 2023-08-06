import { useGlobalContext } from "../context/context";
import axios from "axios";
export const Footer = () => {
  const {
    page,
    setPage,
    personInfo,
    addOn,
    setRequired,
    plan,
    status,
    totalPrice,
    setMessage,
  } = useGlobalContext();
  const schema = {
    name: personInfo.name,
    email: personInfo.email,
    phoneNumber: personInfo.phone,
    status: status,
    plan: plan.plan,
    addOn: Array.isArray(addOn) ? addOn.map(({ name }) => name) : [],
    totalPrice: totalPrice,
  };
  const addDataToDB = async () => {
    try {
      const response = await axios.post("http://localhost:5000/data", schema);
      setMessage(response.data.message);
    } catch (error) {
      console.log(error);
      setMessage("error");
    }
  };
  const handleNextBtn = () => {
    if (
      personInfo.name === "" ||
      personInfo.email === "" ||
      personInfo.phone === ""
    ) {
      setRequired(true);
      setPage(1);
    } else {
      setRequired(false);
      page === 4 && addDataToDB();
      console.log(schema);
      setPage(page + 1);
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
