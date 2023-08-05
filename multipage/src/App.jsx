import { AddOn } from "./component/AddOn";
import { Footer } from "./component/Footer";
import { PersonInfo } from "./component/PersonInfo";
import { Plan } from "./component/Plan";
import { SideBar } from "./component/SideBar";
import { ThankYou } from "./component/ThankYou";
import { Finish } from "./component/finish";
import { useGlobalContext } from "./context/context";
function App() {
  const { page } = useGlobalContext();
  return (
    <div
      className="relative flex flex-col justify-between bg-[#f0f6ff] h-[100vh] w-[100vw] lg:flex-row lg:justify-center lg:items-center
    "
    >
      <SideBar />
      <div className="lg:w-[40%] lg:bg-white lg:h-[85%] lg:rounded-r-2xl lg:pt-5 lg:pl-8">
        {page === 1 && <PersonInfo />}
        {page === 2 && <Plan />}
        {page === 3 && <AddOn />}
        {page === 4 && <Finish />}
        {page === 5 && <ThankYou />}
        <Footer />
      </div>
    </div>
  );
}

export default App;
