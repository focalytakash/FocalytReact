import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../src/Pages/Front/HomePage/HomePage';
import FrontHeader from './Component/Layouts/Front/FrontHeader/FrontHeader';
import FrontFooter from './Component/Layouts/Front/FrontFooter/FrontFooter';
import About from './Pages/Front/About/About';
import Labs from "./Pages/Front/Labs/Labs";
import Course from './Pages/Front/Courses/Course';
const App = () => {
  return (
    <Router>
    <FrontHeader/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About/>}/>
        <Route exact={true} path={"/labs"} element={<Labs/>}/>
        <Route exact={true} path={"/courses"} element={<Course/>}/>
        {/* Add more routes as needed */}
      </Routes>
      <FrontFooter/>
    </Router>
  );
};

export default App
