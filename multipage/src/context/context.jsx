import { createContext, useState, useContext } from "react";

const UserContext = createContext();

const ContextProvider = ({ children }) => {
  // Tools
  const [page, setPage] = useState(2);
  const [required, setRequired] = useState(false);

  // Data
  const [personInfo, setPersonInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [status, setStatus] = useState("monthly");
  const [plan, setPlan] = useState("");

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
