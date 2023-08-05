import thankyou from "../../assets/images/icon-thank-you.svg";

export const ThankYou = () => {
  return (
    <section className="max-lg:absolute flex flex-col justify-center items-center pl-5 pt-5 bg-white shadow-xl w-[90%] left-[5%] top-[100px] h-[380px] rounded-xl lg:shadow-none lg:h-full lg:pb-5">
      <img src={thankyou} className="w-[50px] lg:w-[80px]"></img>
      <h1 className="mt-2 text-[1.8rem] font-extrabold text-[#02295a] lg:mt-5">
        Thank you!
      </h1>
      <p className="text-gray-400 w-[95%] text-center lg:mt-4">
        Thanks for confirming your subscription! We hope you have fun using our
        paltform. If you exer need support, please frll free to email us at
        support@loremgaming.com
      </p>
    </section>
  );
};
