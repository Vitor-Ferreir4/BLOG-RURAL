import './App.css';
import HomePage from './JS/Home';
import Navbar from './JS/Navbar';
import Footera from './JS/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path='/' element={<HomePage />}/>
          </Routes>
          <Footera />
        </div>
    </Router>
  );
}

export default App;
