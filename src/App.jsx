
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Transaction from './pages/Transaction';
import Data from './pages/Data';
import Navigation from './components/Navigation';
import "./App.css";

const App = () => {

  return (
    <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/transaction" element={<Transaction />} />
      <Route path="/data" element={<Data />} />
    </Routes>
  </Router>
  );
};

export default App;
