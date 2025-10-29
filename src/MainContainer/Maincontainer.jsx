import { useState } from "react"
import "../MainContainer/maincontainer.css"


const Mainconatiner = ({ setIssideContainerOpen, setOpen }) => {

    const [imageURL, setimageURL] = useState("");
    const [type, setType] = useState("");
    const [isFilesRecieved, setIsFilesRecieved] = useState(false);

    const buildtheStoryContainer = (e) => {

        const file = e.target.files[0];

        if (!file) {
            console.error("no files selected");
            return;
        }

        const fileurl = URL.createObjectURL(file)
        setimageURL(fileurl);
        setType(file.type);
        setIsFilesRecieved(true);
        console.log(fileurl);
    }

    function openHiddenContainer() {
        document.getElementById("hidden-element").click();
    }

    setTimeout((() => {
        setimageURL("");
        setType("");
        setIsFilesRecieved(false);
    }), 10000)

    return (
        <>
            {!isFilesRecieved ? <div className="story-container" >
                <div className="add-story-main-container">
                    <div className="story-container-heading">
                        <h2>Share a story</h2>
                        <h4>Share something here...will automatically get removed in 24 hours. Share your Photos and Videos here.</h4>
                    </div>
                    <div className="add-story-container" onClick={() => openHiddenContainer()}>
                        <h3>Add a Story</h3>
                        <input type="file" accept="video/*, image/*" id="hidden-element" hidden onChange={buildtheStoryContainer} />
                    </div>
                </div>
            </div> : <div className="story-container" ><div className="story-box"><img src={imageURL} alt={type}></img></div> </div>}
        </>
    )
}

export default Mainconatiner;