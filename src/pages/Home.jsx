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
                My professional skillset ranges from Angular, Reactjs, .NET and Springboot.
                I've used languages like C, Python and Rust informally for course work and I’ve setup infrastructure on AWS before for some personal projects.
                Please feel free to <a href='/contact'>contact me</a> if you feel I can help!
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