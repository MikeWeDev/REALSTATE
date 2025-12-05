import { Routes, Route } from "react-router-dom";
import Home from "./Home"; // Extract your current App content into Home
import Login from "./Components/auth/Login";
import Register from "./Components/auth/Rigister";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
