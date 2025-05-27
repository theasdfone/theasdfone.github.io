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