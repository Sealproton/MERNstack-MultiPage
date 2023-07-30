import { Footer } from "./component/Footer";
import { PersonInfo } from "./component/PersonInfo";
import { Plan } from "./component/Plan";
import { SideBar } from "./component/SideBar";
import { useGlobalContext } from "./context/context";
function App() {
  const { page } = useGlobalContext();
  return (
    <div className="relative flex flex-col justify-between bg-[#f0f6ff] h-[100vh] w-[100vw]">
      <SideBar />
      <div>
        {page === 1 && <PersonInfo />}
        {page === 2 && <Plan />}
        <Footer />
      </div>
    </div>
  );
}

export default App;
