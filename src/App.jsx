import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./compoments/NavBar";
import Body from "./compoments/Body";
import Login from "./compoments/Login";
import Profile from "./compoments/Profile";
import SignUp from "./compoments/SignUp";
import About from "./compoments/About";
import Contact from "./compoments/Contact";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./compoments/Feed";
import Connections from "./compoments/Connections";
// import Request from "./compoments/Request.jsx";
import Request from "./compoments/Request";
import Payment from "./compoments/Payment";
import ChatBox from "./compoments/ChatBox";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/connections" element={<Connections/>}/>
              <Route path="/request" element={<Request/>}/>
              <Route path="/payment" element={<Payment/>}/>
              <Route path="/chat/:targetUserId/:userName" element={<ChatBox/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
