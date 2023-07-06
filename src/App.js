import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import FormPage from './pages/FormPage';
import PreviewPage from './pages/PreviewPage';
import Dashboard from './features/admin/Dashboard';
function App() {
  return (
   
    <div className="App">
    <Router>
      <Routes>
      <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/form" element={<FormPage/>} />
        <Route path="/preview" element={<PreviewPage/>} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
