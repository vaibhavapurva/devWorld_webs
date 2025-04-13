import { useSelector } from "react-redux"
import UserCard from "./UserCard"
import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL } from "../utils/url"

const Feed = () =>{
    const [feed, setFeed] = useState([])
    const feedGet = async() =>{
        try{
            const res = await axios.get(`${BASE_URL}/user/feed?page=1&limit=3`,{withCredentials: true})
            console.log("------",res.data.data)
            setFeed(res.data.data)

        }catch(err){
            console.log(err)
        }
    }

    const handleSendRequest = async(status, id) =>{
        // intersted
        try{
            const res = await axios.post(`${BASE_URL}/request/send/${status}/${id}`,{},{withCredentials: true})
            console.log("res",res)
            feedGet()
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        feedGet()
    },[])
    if(!feed) return 
    if(feed.length === 0 ) return <> No feed</>
    return<>
        <UserCard user={feed[0]} flag={true} handleSendRequest={handleSendRequest}/>
    </>
}

export default Feed