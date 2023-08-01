import { useGlobalContext } from "../context/context";
import checkmark from "../../assets/images/icon-checkmark.svg";
import { useEffect } from "react";
export const AddOn = () => {
  const { status, setAddOn, choose, setchoose } = useGlobalContext();

  const addOnList = [
    {
      name: "Online service",
      price: status === "monthly" ? 1 : 10,
      des: "Access to multiplayer games",
    },
    {
      name: "Larger storage",
      price: status === "monthly" ? 2 : 20,
      des: "Extra a 1 TB of cloud save",
    },
    {
      name: "Customizable profile",
      price: status === "monthly" ? 2 : 20,
      des: "Custon theme on your profile",
    },
  ];
  useEffect(() => {
    const newAddOn = [];
    choose.OS &&
      newAddOn.push({ name: addOnList[0].name, price: addOnList[0].price });
    choose.LS &&
      newAddOn.push({ name: addOnList[1].name, price: addOnList[1].price });
    choose.CP &&
      newAddOn.push({ name: addOnList[2].name, price: addOnList[2].price });
    setAddOn(newAddOn);
  }, [choose]);

  return (
    <section className="absolute flex flex-col pl-5 pr-5 pt-5 bg-white shadow-xl w-[90%] left-[5%] top-[100px] h-[360px] rounded-xl">
      <h1 className="text-[1.3rem] font-bold text-[#02295a]">Pick add-ons</h1>
      <p className="pt-1 text-gray-400 mb-2">
        Add-ons help enhance your gaming exeperience.
      </p>
      {addOnList.map(({ name, price, des }, index) => {
        return (
          <div
            key={name}
            className={`flex rounded-md mt-3 items-center w-full h-[60px] border-[1px] ${
              index === 0 && choose.OS
                ? "border-[#02295a] bg-[#f0f6ff]"
                : index === 1 && choose.LS
                ? "border-[#02295a] bg-[#f0f6ff]"
                : index === 2 && choose.CP
                ? "border-[#02295a] bg-[#f0f6ff]"
                : "border-gray-200"
            }`}
            onClick={() => {
              index === 0 && setchoose({ ...choose, OS: !choose.OS });
              index === 1 && setchoose({ ...choose, LS: !choose.LS });
              index === 2 && setchoose({ ...choose, CP: !choose.CP });
            }}
          >
            <div className="h-full w-[20%] flex justify-center items-center">
              <div
                className={`flex justify-center items-center w-[18px] h-[18px] border-gray-300 border-[1px] rounded-md ${
                  index === 0 && choose.OS
                    ? "bg-[#473dff]"
                    : index === 1 && choose.LS
                    ? "bg-[#473dff]"
                    : index === 2 && choose.CP
                    ? "bg-[#473dff]"
                    : "bg-white"
                } `}
              >
                <img
                  src={
                    index === 0 && choose.OS
                      ? checkmark
                      : index === 1 && choose.LS
                      ? checkmark
                      : index === 2 && choose.CP
                      ? checkmark
                      : ""
                  }
                  className="w-[60%]"
                ></img>
              </div>
            </div>
            <div className="w-[60%]">
              <h1 className="text-[0.9rem] font-bold text-[#02295a]">{name}</h1>
              <p className="text-[0.7rem] text-gray-500">{des}</p>
            </div>
            <div className=" w-[20%] pr-4 h-full flex justify-center items-center">
              <h1 className="text-[0.7rem] font-bold text-[#473dff]">
                +${price}/{status === "yearly" ? "yr" : "mo"}
              </h1>
            </div>
          </div>
        );
      })}
    </section>
  );
};
