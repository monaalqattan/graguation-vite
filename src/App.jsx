import './App.css'
import Login from"./Pages/Login"
import SignUp from './Pages/SignUp';
import Home from"./Pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fontsource/poppins";
import "@fontsource/roboto/400.css";

function App() {
  return (
    <>
    <Home/>
    <Router>
      <Routes>
      <Route path="./Pages/Login.jsx" element={<Login />} />
        <Route path="./Pages/SignUp.jsx" element={<SignUp />} />
        <Route path="./Pages/Home" element={<Home />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
