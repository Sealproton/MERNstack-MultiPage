import { useGlobalContext } from "../context/context";
import sidebarMobile from "../../assets/images/bg-sidebar-mobile.svg";

export const SideBar = () => {
  const { page } = useGlobalContext();
  return (
    <section className="relatice w-full ">
      <img src={sidebarMobile} className="w-full"></img>
      <div className="absolute flex justify-center items-center top-[40px] w-full gap-3">
        <h1
          className={`flex justify-center items-center rounded-full text-[1rem] font-bold w-[30px] h-[30px]  border-[1px] ${
            page === 1
              ? "bg-[#f0f6ff] border-[#f0f6ff] text-[#02295a]"
              : "text-white border-white"
          }`}
        >
          1
        </h1>
        <h1
          className={`flex justify-center items-center rounded-full text-[1rem] font-bold w-[30px] h-[30px]  border-[1px] ${
            page === 2
              ? "bg-[#f0f6ff] border-[#f0f6ff] text-[#02295a]"
              : "text-white border-white"
          }`}
        >
          2
        </h1>
        <h1
          className={`flex justify-center items-center rounded-full text-[1rem] font-bold w-[30px] h-[30px]  border-[1px] ${
            page === 3
              ? "bg-[#f0f6ff] border-[#f0f6ff] text-[#02295a]"
              : "text-white border-white"
          }`}
        >
          3
        </h1>
        <h1
          className={`flex justify-center items-center rounded-full text-[1rem] font-bold w-[30px] h-[30px]  border-[1px] ${
            page === 4
              ? "bg-[#f0f6ff] border-[#f0f6ff] text-[#02295a]"
              : "text-white border-white"
          }`}
        >
          4
        </h1>
      </div>
    </section>
  );
};
