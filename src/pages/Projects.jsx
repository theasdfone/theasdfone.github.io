import Navbar from "../components/Navbar";
import "../css/Projects.css"
import picpic from "../static/picpic.png"
import smartspacer from "../static/smart-spacer.png"

function Projects() {
    return (
        <div>
            <Navbar />
            <div className="proj-main-content">
                <div>
                    <div className="proj-title-container">
                        <h1 className='proj-title'>Personal Projects</h1>
                        <p align="center">This is a collection of my personal projects I've worked on. Click more details to see the github pages!</p>
                    </div>
                    <div className="proj-list-container">
                        <div className="proj-container">
                            <div className="proj-img">
                                <img src={smartspacer}></img>
                            </div>
                            <div>
                                <h1>Smart Spacer</h1>
                                <p>Smart Spacer is a proof-of-concept design for a spacer device and software platform that assists respiratory clinicians in creating personalized treatment plans for their pediatric patients</p>
                                <a href="https://github.com/theasdfone/Smart-Spacer-App">
                                    <button className="proj-button" >More Details &gt;</button>
                                </a>
                            </div>
                        </div>
                        <div className="proj-container">
                            <div className="proj-img">
                                <img src={picpic}></img>
                            </div>
                            <div>
                                <h1>Pic-Pic</h1>
                                <p>Pic-Pic is a mobile app that helps users collect, share and rank their favorite photos with friends.
                                    Users create shared albums for events, which work with Android’s built-in photo apps.
                                </p>
                                <a href="https://github.com/JJamali/Pick-Pic?tab=readme-ov-file">
                                    <button className="proj-button" >More Details &gt;</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Projects;