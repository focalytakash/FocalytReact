import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../src/Pages/Front/HomePage/HomePage';
import FrontHeader from './Component/Layouts/Front/FrontHeader/FrontHeader';
import FrontFooter from './Component/Layouts/Front/FrontFooter/FrontFooter';
import About from './Pages/Front/About/About';
import Labs from "./Pages/Front/Labs/Labs";
import Course from './Pages/Front/Courses/Course';
import Jobs from './Pages/Front/Jobs/Jobs';
import Contact from './Pages/Front/Contact/Contact';
import CourseDetails from './Pages/Front/CourseDetails/CourseDetails';
import "./App.css";
import CompanyLogin from './Component/Layouts/App/Company/CompanyLogin';
import Sidebar from './Pages/App/Sidebar/Sidebar';
const App = () => {
  return (
    <Router>
    <FrontHeader/>
      <Routes>
        <Route exact={true} path="/" element={<HomePage />} />
        <Route exact={true} path="/about" element={<About/>}/>
        <Route exact={true} path={"/labs"} element={<Labs/>}/>
        <Route exact={true} path={"/courses"} element={<Course/>}/>
        <Route exact={true} path={"/joblisting"} element={<Jobs/>}/>
        <Route exact={true} path={"/contact"} element={<Contact/>}/>
        <Route exact={true} path={"/coursedetails"} element={<CourseDetails/>}/>
        <Route exact={true} path={"/company/login"} element={<CompanyLogin/>}/>
        {/* Add more routes as needed */}
      </Routes>
      <FrontFooter/>
      <Routes>
      <Route exact={true} path={"/candidate/searchcourses"} element={<Sidebar/>}/>
      </Routes>
    </Router>
  );
};

export default App
