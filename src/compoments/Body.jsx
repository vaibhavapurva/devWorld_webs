import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./NavBar";
import Footer from "./Footer";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";

const Body = () => {
  const userData = useSelector((state) =>state.user)
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const fetchUser = async() =>{
    if(!userData){
    try{
      const res = await axios.get("http://localhost:3000/profile",{
        withCredentials: true
      })
      dispatch(addUser(res.data.data))
    }catch(err){
      if(err.status === 401){
        navigate("/login")
      }
      console.log(err)
    }
  }
  }

  useEffect(()=>{
      fetchUser()
  },[])

  return(
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>)
};

export default Body;
