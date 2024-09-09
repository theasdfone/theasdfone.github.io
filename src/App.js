import './App.css';
import ProfilePic from './static/pfp.png';
import Texada from './static/texada.jpg';
import AutoTrader from './static/autotrader.jpg';
import Shoplogix from './static/shoplogix.jpg';
import Westar from './static/westar.jpg';
import Resume from './static/Resume.pdf';
import Filler from './static/filler.png';


function App() {
  return (
    <div className='main'>
      <nav className='navbar'>
        <div className='navbar-container-1'>
          <h1 className='nav-header'>Hi, I'm Sam</h1>
        </div>
        <div className='navbar-container-2'>
          <ul className='navbar-menu'>
            <li><a href='http://linkedin.com/in/theasdfone'>Linkedin</a></li>
            <li><a href='http://github.com/theasdfone'>Github</a></li>
            <li><a onClick={() => {window.open(Resume);}}>Resume</a></li>
          </ul>
        </div>
      </nav>
      <div className='main-body'>
        <div className='main-content'>
          <div className='main-persona'>
            <div className='main-persona-description'>
              <h1 className='main-persona-header'>Sam Zhu</h1>
              <h1 className='main-persona-second-header'>About Me</h1>
              <div className='main-persona-paragraph'>
                <p>
                  I'm a fourth-year engineering student at the University of Waterloo. I have a passion for hiking, drawing and coding. 
                  I enjoy working on side projects and doodling in my free time.
                </p>
                <p>
                  My tech stack currently consists of Reactjs, Angularjs, .NET, Spring/Springboot along with some experience in writing scripts in SQL. 
                  I'm currently learning about software architecture and solutions in AWS which is something I'm keen to practice more with. 
                  I strive to keep myself up to date with my knowledge and constantly look for ways to challenge myself.
                </p>
              </div>
            </div>
            <img src={ProfilePic} className='profile-picture' alt='Profile Picture'/>
          </div>
          <div className='main-work-experience'>
            <div>
              <h1 className='main-section-header'>Work Experience</h1>
              <div>
                <div className='work-box-sizes'>
                  <a className='image-container'>
                      <img src={Texada} alt="lifestyle" className="dashboard-images"/>
                      <div className="dashboard-text-container">
                          <h3 className="dashboard-text">Texada</h3>
                      </div>
                  </a>
                  <a className='image-container'>
                      <img src={AutoTrader} alt="lifestyle" className="dashboard-images" />
                      <div className="dashboard-text-container">
                          <h3 className="dashboard-text">AutoTrader</h3>
                      </div>
                  </a>
                  <a className='image-container'>
                      <img src={Shoplogix} alt="lifestyle" className="dashboard-images" />
                      <div className="dashboard-text-container">
                          <h3 className="dashboard-text">Shoplogix</h3>
                      </div>
                  </a>
                  <a className='image-container'>
                      <img src={Westar} alt="lifestyle" className="dashboard-images" />
                      <div className="dashboard-text-container">
                          <h3 className="dashboard-text">Westar Travel</h3>
                      </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='main-project-section'>
            <div>
              <h1 className='main-section-header'>Projects</h1>
              <div className='work-box-sizes'>
                <a className='image-container' href="https://github.com/theasdfone/ResourceEdu">
                    <img src={Filler} alt="black" className="dashboard-images" />
                    <div className="dashboard-text-container">
                        <h3 className="dashboard-text">ResourceEDU</h3>
                    </div>
                </a>
                <a className='image-container' href="https://github.com/theasdfone/CI-CD-Pipeline">
                    <img src={Filler} alt="black" className="dashboard-images" />
                    <div className="dashboard-text-container">
                        <h3 className="dashboard-text">CICD Pipeline</h3>
                    </div>
                </a>
              </div>
            </div>
          </div>
          <footer className='footer'>@2024 / Sam Zhu</footer>
        </div>
      </div>
    </div>
  );
}

export default App;