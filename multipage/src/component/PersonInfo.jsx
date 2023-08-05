import { useGlobalContext } from "../context/context";

export const PersonInfo = () => {
  const { required, personInfo, setPersonInfo } = useGlobalContext();
  return (
    <section className="max-lg:absolute flex flex-col p-6 bg-white shadow-xl w-[90%] left-[5%] top-[100px] h-[400px] rounded-xl lg:shadow-none lg:h-[85%] ">
      <h1 className="text-[1.3rem] font-bold text-[#02295a] lg:text-[2.2rem]">
        Personal Info
      </h1>
      <p className="pt-4 text-gray-400 lg:pt-2 lg:text-[1.1rem]">
        Please provide you name,email address,and phone number.
      </p>
      <div className="flex justify-between mt-3 lg:mt-8">
        <label
          htmlFor="name"
          className="text-[#02295a] text-[0.8rem] lg:mb-2 lg:text-[1rem]"
        >
          Name
        </label>
        {required && personInfo.name === "" && (
          <h1 className=" text-red-500 text-[0.7rem] font-bold">
            This field is required.
          </h1>
        )}
      </div>
      <input
        type="text"
        name="name"
        key="name"
        placeholder="e.g. Stephen King"
        value={personInfo.name}
        className={`border-[1px] rounded-md h-[40px] pl-3 font-[600] text-[0.9rem] ${
          required && personInfo.name === ""
            ? "border-red-500"
            : "border-gray-400"
        } lg:h-[50px]`}
        onChange={(e) => setPersonInfo({ ...personInfo, name: e.target.value })}
      ></input>
      <div className="flex justify-between mt-3">
        <label
          htmlFor="email"
          className="text-[#02295a] text-[0.8rem] lg:mb-2 lg:mt-1 lg:text-[1rem]"
        >
          Email Address
        </label>
        {required && personInfo.email === "" && (
          <h1 className=" text-red-500 text-[0.7rem] font-bold">
            This field is required.
          </h1>
        )}
      </div>
      <input
        type="text"
        name="email"
        key="email"
        placeholder="e.g. stephenking@loram.com"
        value={personInfo.email}
        className={`border-[1px] rounded-md h-[40px] pl-3 font-[600] text-[0.9rem] ${
          required && personInfo.email === ""
            ? "border-red-500"
            : "border-gray-400"
        } lg:h-[50px]`}
        onChange={(e) =>
          setPersonInfo({ ...personInfo, email: e.target.value })
        }
      ></input>
      <div className="flex justify-between mt-3">
        <label
          htmlFor="phone"
          className="text-[#02295a] text-[0.8rem] lg:mb-2 lg:mt-1 lg:text-[1rem]"
        >
          Phone Number
        </label>
        {required && personInfo.phone === "" && (
          <h1 className=" text-red-500 text-[0.7rem] font-bold">
            This field is required.
          </h1>
        )}
      </div>
      <input
        type="text"
        name="phone"
        key="phone"
        value={personInfo.phone}
        placeholder="e.g. +1 234 567 890"
        className={`border-[1px] rounded-md h-[40px] pl-3 font-[600] text-[0.9rem] ${
          required && personInfo.phone === ""
            ? "border-red-500"
            : "border-gray-400"
        } lg:h-[50px]`}
        onChange={(e) =>
          setPersonInfo({ ...personInfo, phone: e.target.value })
        }
      ></input>
    </section>
  );
};
