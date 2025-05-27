import Navbar from "../components/Navbar";
import "../css/Workhistory.css"

import texada from "../static/texada.png"
import autotrader from "../static/autotrader.jpg"
import shoplogix from "../static/shoplogix.png"
import westar from "../static/westar.png"

function WorkHistory() {

    return (
        <div>
            <Navbar />
            <div className="work-main-content">
                <div className="work-title-container">
                    <h1 className='work-title'>Work History</h1>
                    <p align="center">A collection of my work history and what I did</p>
                </div>
                <div className="work-company-list">
                    <div className="work-company-container">
                        <div className="work-company-images">
                            <img src={texada}></img>
                        </div>
                        <div className="work-company-description">
                            <p className="work-company-texada-tag">Construction</p>
                            <h1>Texada Software</h1>
                            <p>Texada Software focuses on delivering SaaS software for the sales, rentals and services of heavy equipment. It provides dealers with a variety of different tools from management to inventory and sales.</p>
                        </div>
                    </div>
                    <div className="work-company-container">
                        <div className="work-company-description">
                            <p className="work-company-autotrader-tag">Automobile</p>
                            <h1>Autotrader</h1>
                            <p>Texada Software focuses on delivering SaaS software for the sales, rentals and services of heavy equipment. It provides dealers with a variety of different tools from management to inventory and sales.</p>
                        </div>
                        <div className="work-company-images">
                            <img src={autotrader}></img>
                        </div>
                    </div>
                    <div className="work-company-container">
                        <div className="work-company-images">
                            <img src={shoplogix}></img>
                        </div>
                        <div className="work-company-description">
                            <p className="work-company-shoplogix-tag">Manufacturing</p>
                            <h1>Shoplogix</h1>
                            <p>Texada Software focuses on delivering SaaS software for the sales, rentals and services of heavy equipment. It provides dealers with a variety of different tools from management to inventory and sales.</p>
                        </div>
                    </div>
                    <div className="work-company-container">
                        <div className="work-company-description">
                            <p className="work-company-westar-tag">Travel</p>
                            <h1>Westar Travel</h1>
                            <p>Texada Software focuses on delivering SaaS software for the sales, rentals and services of heavy equipment. It provides dealers with a variety of different tools from management to inventory and sales.</p>
                        </div>
                        <div className="work-company-images">
                            <img src={westar}></img>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default WorkHistory;