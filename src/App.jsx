import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./compoments/NavBar";
import Body from "./compoments/Body";
import Login from "./compoments/Login";
import Profile from "./compoments/Profile";
import SignUp from "./compoments/SignUp";
import About from "./compoments/About";
import Contact from "./compoments/Contact";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body/>} >
            <Route path="/login" element={<Login/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact/" element={<Contact/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
