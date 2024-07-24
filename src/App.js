import './App.css';
import HomePage from './JS/Home';
import Navbar from './JS/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <div className="App">
          <Navbar />
          <Route exact path='/' element={<HomePage />}/>
        </div>
      </Routes>
    </Router>
  );
}

export default App;
