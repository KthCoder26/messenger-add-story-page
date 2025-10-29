import { FaBars } from "react-icons/fa6";
import "../Navbar/navbar.css";
import { useEffect } from "react";

export function Navbar({ IssideContainerOpen, setIssideContainerOpen, setOpen }) {
    function openSideContainer() {
        if (IssideContainerOpen === false) {
            setIssideContainerOpen(true);
            setOpen(true);
        }
        console.log("it's working");
    }

    // useEffect((() => {
    //     setTimeout((() => setOpen(true)), 50)
    // }), [])

    return (
        <div className="nav-contents">
            <div className="bar-icon" onClick={() => openSideContainer()} >
                <FaBars />
            </div>
            <div className="heading">
                <h2>Stories</h2>
            </div>
        </div>
    )
}