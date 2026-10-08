
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import Tutor from "./Tutor";
import Profile from "./Profile";
import Home from "./Home";





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/tutor" element={<Tutor />} />
</Routes>
    </BrowserRouter>
  );
}

export default App;