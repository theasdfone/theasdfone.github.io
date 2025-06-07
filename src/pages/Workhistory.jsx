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
                    <p align="center">This is a collection of my work history and the projects I worked on at each company. Click "My Projects" to learn more about my work history at each company.</p>
                </div>
                <div className="work-company-list">
                    <div className="work-company-container">
                        <div className="work-company-images">
                            <img src={texada}></img>
                        </div>
                        <div className="work-company-description">
                            <div>
                                <p className="work-company-tag texada">Construction</p>
                                <h1>Texada Software</h1>
                                <p>Texada Software focuses on delivering SaaS software for the sales, rentals and services of heavy equipment. It provides dealers with a variety of different tools from management to inventory and sales.</p>
                            </div>
                            <a href="/temp">
                                <button className="work-company-button texada">My Projects &gt;</button>
                            </a>
                        </div>
                    </div>
                    <div className="work-company-container">
                        <div className="work-company-description">
                            <div>
                                <p className="work-company-tag autotrader">Automobile</p>
                                <h1>Autotrader</h1>
                                <p>Autotrader is an online marketplace for buying and selling vehicles. Autotrader offers services that help consumers buy cars, sell cars, or research car purchases. For buyers, the site offers listings of new and used vehicles for sale from dealers and private sellers.</p>
                            </div>
                            <a href="/temp">
                                <button className="work-company-button autotrader">My Projects &gt;</button>
                            </a>
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
                            <div>
                                <p className="work-company-tag shoplogix">Manufacturing</p>
                                <h1>Shoplogix</h1>
                                <p>Shoplogix develops cloud-based software used by manufacturers to monitor and improve production performance. While backed by a large parent company, Shoplogix functions independently and maintains its own technical and operational teams.</p>
                            </div>
                            <a href="/temp">
                                <button className="work-company-button shoplogix">My Projects &gt;</button>
                            </a>
                        </div>
                    </div>
                    <div className="work-company-container">
                        <div className="work-company-description">
                            <div>
                                <p className="work-company-tag westar">Travel</p>
                                <h1>Westar Travel</h1>
                                <p>Westar is a Calgary-based tour operator specializing in guided travel throughout the Canadian Rockies, including Banff, Jasper, Yoho, and surrounding areas. The company operates its own fleet of vehicles, offers multilingual guides, and provides both day trips and multi-day tours.</p>
                            </div>
                            <a href="/temp">
                                <button className="work-company-button westar">My Projects &gt;</button>
                            </a>
                        </div>
                        <div className="work-company-images">
                            <img src={westar}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default WorkHistory;