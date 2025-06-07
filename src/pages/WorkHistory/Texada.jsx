import Navbar from "../../components/Navbar";
import temp from "../../static/temp.png"
import "../../css/WorkHistory/Texada.css"


function Texada() {
    return (
        <div>
            <Navbar />
            <div className="work-main-content">
                <div className="work-title-container">
                    <h1 className='work-title'>Under Construction</h1>
                    <p align="center">This section is currently a work in progress, please check in later and stay tuned!</p>
                    <img className="temp" src={temp} />
                    <p>Credit: <a href="https://xkcd.com/349/">https://xkcd.com/349/</a></p>
                </div>
            </div>
        </div>
    )
}

export default Texada;