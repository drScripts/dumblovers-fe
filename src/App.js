import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Auth from "./pages/auth";
import Home from "./pages/home"
import Profile from './pages/profile'


function App() {

  return (
    <Routes>
      <Route path="/auth" element={<Auth />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
    </Routes>
  );
}

export default App;