// contributor :- Ketankumar Bodarya

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/home';
import Footer from './components/Footer';
import About from './pages/about';
import Packages from './pages/packages';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/home' element={< Home />}></Route>
        <Route exact path='/about' element={< About />}></Route>
        <Route exact path='/packages' element={< Packages />}></Route>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
