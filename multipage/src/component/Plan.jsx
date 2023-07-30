import { useGlobalContext } from "../context/context";
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
    <section className="absolute flex flex-col pl-5 pt-5 bg-white shadow-xl w-[90%] left-[5%] top-[100px] h-[460px] rounded-xl">
      <h1 className="text-[1.3rem] font-bold text-[#02295a]">
        Select Your Plan
      </h1>
      <p className="pt-1 text-gray-400 mb-2">
        You have the option of monthly or yearly billing.
      </p>
      {/* planList----------------------------------------------------------------- */}
      {planList.map((thisplan) => {
        const { img, price } = thisplan;
        return (
          <div
            key={planList.plan}
            className={`flex cursor-pointer h-[80px] border-[1px]  mt-2 p-3 rounded-xl ${
              thisplan.plan === plan
                ? "border-[#02295a] bg-[#f0f6ff]"
                : "border-gray-300"
            }`}
            onClick={() => setPlan(thisplan.plan)}
          >
            <img src={img} className="w-[40px] h-[40px]" />
            <div
              className={`ml-4 ${
                status === "yearly" ? "leading-5" : "leading-6"
              }`}
            >
              <h1 className="font-bold text-[#02295a]">{thisplan.plan}</h1>
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
      <div className="flex justify-center items-center bg-gray-100 mt-5 h-[50px] gap-4 shadow-lg">
        <h2
          className="text-[#02295a] cursor-pointer font-bold"
          onClick={() => setStatus("monthly")}
        >
          Monthly
        </h2>
        <div
          className={`flex items-center p-1 w-[45px] h-[22px] rounded-full bg-[#02295a]  `}
          onClick={() =>
            status === "monthly" ? setStatus("yearly") : setStatus("monthly")
          }
        >
          <div
            className={`w-[15px] cursor-pointer h-[15px] rounded-full transition-transform duration-300 bg-white ${
              status === "yearly" ? "translate-x-6" : "translate-x-0"
            }`}
          ></div>
        </div>
        <h2
          className="text-[#02295a] cursor-pointer font-bold"
          onClick={() => setStatus("yearly")}
        >
          Yearly
        </h2>
      </div>
    </section>
  );
};
