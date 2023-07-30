import { useGlobalContext } from "../context/context";
import { useState } from "react";
import arcade from "../../assets/images/icon-arcade.svg";
import advance from "../../assets/images/icon-advanced.svg";
import pro from "../../assets/images/icon-pro.svg";

export const Plan = () => {
  const { status, setStatus, plan, setPlan } = useGlobalContext();
  const planList = [
    { img: arcade, plan: "Arcade", price: status === "monthly" ? 9 : 90 },
    {
      img: advance,
      plan: "Advance",
      price: status === "monthly" ? 12 : 120,
    },
    { img: pro, plan: "Pro", price: status === "monthly" ? 15 : 150 },
  ];
  return (
    <section className="absolute flex flex-col p-5 bg-white shadow-xl w-[90%] left-[5%] top-[100px] h-[460px] rounded-xl">
      <h1 className="text-[1.3rem] font-bold text-[#02295a]">
        Select Your Plan
      </h1>
      <p className="pt-1 text-gray-400 mb-2">
        You have the option of monthly or yearly billing.
      </p>
      {planList.map(({ img, plan, price }) => {
        return (
          <div
            key={plan}
            className="flex h-[80px] border-[1px] border-gray-300 mt-2 p-3 rounded-xl"
          >
            <img src={img} className="w-[40px] h-[40px]" />
            <div
              className={`ml-4 ${
                status === "yearly" ? "leading-4" : "leading-6"
              }`}
            >
              <h1 className="font-bold text-[#02295a]">{plan}</h1>
              <p className="text-[0.85rem] text-gray-400">
                ${price}/{status === "monthly" ? "mo" : "yr"}
              </p>
              {status === "yearly" && (
                <p className="text-[0.8rem] text-[#02295a]">2 months free</p>
              )}
            </div>
          </div>
        );
      })}
      <div className="flex justify-center items-center bg-gray-100 mt-5 h-[50px] gap-4">
        <h2
          className="text-[#02295a] font-bold"
          onClick={() => setStatus("monthly")}
        >
          Monthly
        </h2>
        <div
          className={`flex items-center transition-all duration-1000 p-1 w-[45px] h-[22px] rounded-full bg-[#02295a] ${
            status === "monthly" ? "justify-start" : "justify-end"
          } `}
          onClick={() =>
            status === "monthly" ? setStatus("yearly") : setStatus("monthly")
          }
        >
          <div className="w-[15px] h-[15px] rounded-full transform transition-transform  bg-white"></div>
        </div>
        <h2
          className="text-[#02295a] font-bold"
          onClick={() => setStatus("yearly")}
        >
          Yearly
        </h2>
      </div>
    </section>
  );
};
