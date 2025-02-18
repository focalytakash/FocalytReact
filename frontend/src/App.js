import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../src/Pages/Front/HomePage/HomePage';
import FrontHeader from './Component/Layouts/Front/FrontHeader';
import FrontFooter from './Component/Layouts/Front/FrontFooter';
import About from './Pages/Front/About/About';
import Labs from "./Pages/Front/Labs/Labs";
const App = () => {
  return (
    <Router>
    <FrontHeader/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About/>}/>
        <Route exact={true} path={"/labs"} element={<Labs/>}/>
        {/* Add more routes as needed */}
      </Routes>
      <FrontFooter/>
    </Router>
  );
};

export default App
