import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
   
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} /> */}
     
      </Routes>
    </Router>
  </div>
  );
}

export default App;
