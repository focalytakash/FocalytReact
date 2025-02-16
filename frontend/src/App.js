import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../src/Pages/Front/HomePage';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App
