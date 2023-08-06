import { createContext, useState, useContext } from "react";

const UserContext = createContext();

const ContextProvider = ({ children }) => {
  // ---------------------------Tools----------------------------------------------------
  const [page, setPage] = useState(1);
  const [required, setRequired] = useState(false);
  const [choose, setchoose] = useState({ OS: false, LS: false, CP: false });
  const [message, setMessage] = useState("");
  // ----------------------------Data--------------------------------------------------
  const [personInfo, setPersonInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  // monthly or yearly
  const [status, setStatus] = useState("monthly");
  // {plan:'',price:0}
  const [plan, setPlan] = useState("");
  // [{name:'',price:0}]
  const [addOn, setAddOn] = useState([{ name: "", price: 0 }]);
  // TotalPrice set at finish component
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <UserContext.Provider
      value={{
        page,
        setPage,
        setPersonInfo,
        personInfo,
        required,
        setRequired,
        status,
        setStatus,
        plan,
        setPlan,
        setAddOn,
        addOn,
        choose,
        setchoose,
        totalPrice,
        setTotalPrice,
        message,
        setMessage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(UserContext);
};

export { ContextProvider, useGlobalContext };
