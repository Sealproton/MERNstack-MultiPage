import { useGlobalContext } from "../context/context";
import sidebarMobile from "../../assets/images/bg-sidebar-mobile.svg";
import sidebarDesktop from "../../assets/images/bg-sidebar-desktop.svg";
export const SideBar = () => {
  const { page } = useGlobalContext();
  return (
    <section className="lg:relative w-full lg:w-[20%] lg:h-[85%]  lg:p-4 lg:bg-white lg:rounded-l-2xl">
      <img src={sidebarMobile} className="w-full lg:hidden"></img>
      <img src={sidebarDesktop} className="max-lg:hidden w-full"></img>

      <div className="absolute flex justify-center items-center top-[40px] w-full gap-3 lg:flex-col lg:gap-6 lg:top-[60px] lg:left-[40px] lg:items-start">
        <div className="flex gap-4 items-center">
          <h1
            className={`flex justify-center items-center rounded-full text-[1rem] font-bold w-[30px] h-[30px]  border-[1px] ${
              page === 1
                ? "bg-[#f0f6ff] border-[#f0f6ff] text-[#02295a]"
                : "text-white border-white"
            }
          lg:w-[35px] lg:h-[35px] `}
          >
            1
          </h1>
          <div className="max-lg:hidden">
            <h1 className="text-[14px] text-gray-400">STEP 1</h1>
            <p className="text-[14px] font-bold text-white">YOUR INFO</p>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <h1
            className={`flex justify-center items-center rounded-full text-[1rem] font-bold w-[30px] h-[30px]  border-[1px] ${
              page === 2
                ? "bg-[#f0f6ff] border-[#f0f6ff] text-[#02295a]"
                : "text-white border-white"
            }
          lg:w-[35px] lg:h-[35px] `}
          >
            2
          </h1>
          <div className="max-lg:hidden">
            <h1 className="text-[14px] text-gray-400">STEP 2 </h1>
            <p className="text-[14px] font-bold text-white">SELECT PLAN</p>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <h1
            className={`flex justify-center items-center rounded-full text-[1rem] font-bold w-[30px] h-[30px]  border-[1px] ${
              page === 3
                ? "bg-[#f0f6ff] border-[#f0f6ff] text-[#02295a]"
                : "text-white border-white"
            }
          lg:w-[35px] lg:h-[35px] `}
          >
            3
          </h1>
          <div className="max-lg:hidden">
            <h1 className="text-[14px] text-gray-400">STEP 3</h1>
            <p className="text-[14px] font-bold text-white">ADD-ONS</p>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <h1
            className={`flex justify-center items-center rounded-full text-[1rem] font-bold w-[30px] h-[30px]  border-[1px] ${
              page === 4 || page === 5
                ? "bg-[#f0f6ff] border-[#f0f6ff] text-[#02295a]"
                : "text-white border-white"
            }
          lg:w-[35px] lg:h-[35px] `}
          >
            4
          </h1>
          <div className="max-lg:hidden">
            <h1 className="text-[14px] text-gray-400">STEP 4</h1>
            <p className="text-[14px] font-bold text-white">SUMMARY</p>
          </div>
        </div>
      </div>
    </section>
  );
};
