import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import WorkHistory from './pages/Workhistory';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/work" element={<WorkHistory />} />
        <Route exact path="/projects" element={<WorkHistory />} />
        <Route exact path="/contact" element={<WorkHistory />} />
      </Routes>
    </Router>
  );
}

export default App;