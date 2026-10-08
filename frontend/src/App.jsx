
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import Tutor from "./Tutor";
import Profile from "./Profile";
import Home from "./Home";
import EditProfile from "./EditProfile";
import About from "./About";





function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/setup" element={<Profile setup />} />
          <Route path="/profile" element={<EditProfile />} />
          <Route path="/tutor" element={<Tutor />} />
          <Route path="/edit-profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
</Routes>
    </BrowserRouter>
  );
}

export default App;