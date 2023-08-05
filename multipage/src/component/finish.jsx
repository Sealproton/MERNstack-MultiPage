import { useEffect } from "react";
import { useGlobalContext } from "../context/context";

export const Finish = () => {
  const { status, addOn, plan, setPage, totalPrice, setTotalPrice } =
    useGlobalContext();

  // set total price using useEffect
  useEffect(() => {
    const planPrice = plan.price;
    const addOnPrice = addOn.reduce((prev, curr) => {
      return prev + curr.price;
    }, 0);
    setTotalPrice(planPrice + addOnPrice);
  }, []);

  return (
    <section className="max-lg:absolute flex flex-col p-5 bg-white shadow-xl w-[90%] left-[5%] top-[100px]  rounded-xl lg:shadow-none lg:h-[85%]">
      <h1 className="text-[1.3rem] font-bold text-[#02295a] lg:text-[2rem] lg:mt-2">
        Finishing up
      </h1>
      <p className="pt-1 text-gray-400 mb-2">
        Double-check everything looks OK before confirming.
      </p>
      {/* conclusion list container */}
      <section className="bg-[#f0f6ff] w-full pt-1 pb-4 rounded-md lg:mt-8">
        {/* plan */}
        <div className="flex items-center justify-between pl-4 pr-4 mb-2 h-[60px] ">
          <div className="justify-center items-start leading-5 flex flex-col font-bold text-[#02295a] text-[0.85rem] w-[80%] h-full border-b-2 border-b-gray-200">
            <h1 className="lg:text-[1rem] lg:mb-1">
              {plan.plan} ({status})
            </h1>
            <p
              className=" underline cursor-pointer text-gray-400 text-[0.8rem]"
              onClick={() => {
                setPage(2);
              }}
            >
              Change
            </p>
          </div>
          <h1 className="flex justify-center items-center w-[20%] h-full border-b-2 border-b-gray-200 font-extrabold text-[#02295a] text-[0.8rem] lg:text-[1rem]">
            ${plan.price}/{status === "monthly" ? "mo" : "yr"}
          </h1>
        </div>
        {/* Add-on */}
        {addOn.map((addon) => {
          const { name, price } = addon;
          return (
            <div
              key={name}
              className="flex text-gray-400 text-[0.8rem] items-center justify-between pl-4 pr-4 h-[28px] lg:font-bold"
            >
              <div className="justify-center items-start leading-5 flex flex-col w-[80%] h-full ">
                <h1>{name}</h1>
              </div>
              <h1 className="flex justify-center items-center w-[20%] h-full text-[#02295a] text-[0.75rem] ">
                +${price}/{status === "monthly" ? "mo" : "yr"}
              </h1>
            </div>
          );
        })}
      </section>
      <div className="flex items-center justify-between pl-4 pr-4 pt-2  h-[60px] ">
        <div className="justify-center items-start leading-5 flex flex-col text-gray-400 text-[0.8rem] w-[80%] h-full ">
          <h1 className="lg:font-bold">
            Total (per {status === "monthly" ? "month" : "year"})
          </h1>
        </div>
        <h1 className="flex justify-center items-center w-[20%] h-full  font-bold text-[#473dff] text-[1rem]">
          +${totalPrice}/{status === "monthly" ? "mo" : "yr"}
        </h1>
      </div>
    </section>
  );
};
