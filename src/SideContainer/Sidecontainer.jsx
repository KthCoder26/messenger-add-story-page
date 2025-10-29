import { IoSettingsOutline } from "react-icons/io5";
import { ListofItems } from "../ListofItems"
import "../SideContainer/sidecontainer.css"

export function Sidecontainer({ IssideContainerOpen, open }) {


    return (
        <>
            {IssideContainerOpen && <div className="side-container">
                {/* {`side-container ${open ? "open" : ""}`} */}
                <div className="side-contents">
                    <div className="intro">
                        <div className="profile-pic">
                            <img src="./p-image.jpeg" alt="profilr-pic"></img>
                        </div>
                        <div className="name">
                            <h3>Rittik</h3>
                            <h5>@rittik.saha24</h5>
                        </div>
                        <div className="settings">
                            <IoSettingsOutline />
                        </div>
                    </div>
                    {ListofItems.map((book, number) => {
                        return (
                            <div className="item-container" key={number}>
                                <div className="icon-container">{book.item_icon}</div>
                                <div className="item-name">
                                    <p>{book.item_name}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>}
        </>
    )
}