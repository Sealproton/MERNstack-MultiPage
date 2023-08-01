import { createContext, useState, useContext } from "react";

const UserContext = createContext();

const ContextProvider = ({ children }) => {
  // Tools
  const [page, setPage] = useState(1);
  const [required, setRequired] = useState(false);
  const [choose, setchoose] = useState({ OS: false, LS: false, CP: false });
  // Data
  const [personInfo, setPersonInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [status, setStatus] = useState("monthly");
  const [plan, setPlan] = useState("");
  const [addOn, setAddOn] = useState("");

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
