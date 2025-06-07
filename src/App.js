import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import WorkHistory from './pages/Workhistory';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Texada from './pages/WorkHistory/Texada';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/work" element={<WorkHistory />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/temp" element={<Texada />} />
      </Routes>
    </Router>
  );
}

export default App;