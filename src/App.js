import './App.css';
import HomePage from './JS/Home';
import Navbar from './JS/Navbar';
import Footera from './JS/Footer'
import G2 from './JS/G2';
import G4 from './JS/G4';
import G6 from './JS/G6';
import G7 from './JS/G7';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path='/' element={<HomePage />}/>
            <Route exact path='/G2' element={<G2 />} />
            <Route exact path='/G4' element={<G4 />} />
            <Route exact path='/G6' element={<G6 />} />
            <Route exact path='/G7' element={<G7 />} />
          </Routes>
          <Footera />
        </div>
    </Router>
  );
}

export default App;
