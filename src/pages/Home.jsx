import Navbar from '../components/Navbar';
import '../css/Home.css';
import ProfilePic from '../static/pfp.png';


function Home() {
  return (
    <div>
      <Navbar />
      <div className='main-content'>
        <div className='main-persona'>
          <div className='main-persona-description'>
            <h1 className='main-persona-header'>Sam Zhu</h1>
            <div className='main-persona-paragraph'>
              <p>
                Hello! I’m a recent graduate from the Biomedical Engineering program at UWaterloo.
                I have a focus on computing with courses in computer networks, operating systems, performance programming, design patterns and software architecture.
                I've worked professionally at 4 different companies across a variety of different industries.
              </p>
              <p>
                My professional skillset ranges from angular, and reactjs on the frontend and .NET and springboot on the backend.
                For class projects, python was a common language that was used to complete projects. I’ve also setup infrastructure on AWS for my personal projects.
                I have a solutions architect certificate from one of my coop terms.
              </p>
            </div>
          </div>
          <div className='profile-picture'>
            <img src={ProfilePic} alt='Profile Picture' />
          </div>
        </div>
        <div>
          <h3>Worked With</h3>
          <div className='main-companies'>
            <button className='main-companies-button' href=''>Texada Software</button>
            <button className='main-companies-button' href=''>AutoTrader</button>
            <button className='main-companies-button' href=''>Shoplogix</button>
            <button className='main-companies-button' href=''>Westar Travel Ltd</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;