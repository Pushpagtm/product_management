import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import FormPage from './pages/FormPage';
import PreviewPage from './pages/PreviewPage';
import Dashboard from './features/admin/Dashboard';
import Admin from './components/layouts/Admin';
import Protected from './features/auth/components/Protected';
import FooterAdmin from './components/Footers/FooterAdmin';
function App() {
  return (
   
    <div className="App">
    <Router>
      <Routes>
      <Route path="/dashboard/*" element={<Admin/>} />
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
      </Routes>
      <FooterAdmin/>
    </Router>
  </div>
  );
}

export default App;
