import { useState } from "react"
import Mainconatiner from "./MainContainer/Maincontainer";
import { Navbar } from "./Navbar/Navbar";
import "./index.css";
import { Sidecontainer } from "./SideContainer/Sidecontainer";

function App() {
  const [IssideContainerOpen, setIssideContainerOpen] = useState(false);
  const [open, setOpen] = useState(false);
  // const [IsSMCopen, setSMCopen] = useState(true);

  const closeSideContainer = () => {
        // e.target.value = "";
        setIssideContainerOpen(false);
        setOpen(false);
        console.log("working")
    }
  return (
    <>
    <div className="App" onMouseDown={closeSideContainer}>
      <Navbar IssideContainerOpen={IssideContainerOpen} setIssideContainerOpen={setIssideContainerOpen} setOpen={setOpen}/>
      <Mainconatiner  setIssideContainerOpen={setIssideContainerOpen} setOpen={setOpen}/>
    </div>
    <Sidecontainer  IssideContainerOpen={IssideContainerOpen}  setIssideContainerOpen={setIssideContainerOpen} open={open}/>
    </>
  );
}

export default App;
