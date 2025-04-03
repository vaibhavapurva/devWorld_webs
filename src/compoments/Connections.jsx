import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addConnections } from "../utils/connectionsSlice"
import { BASE_URL } from "../utils/url"

const Connections = () =>{
    const dispatch = useDispatch()
    const connectionsList = useSelector((state)=> state.connection)
    const connectionsGet = async() =>{
        try{
            const res = await axios.get(`${BASE_URL}/user/connections`,{withCredentials: true})
            console.log("addConnections", res)
            dispatch(addConnections(res.data.data))
        }catch (err){
            console.log(err)
        }
    }

    console.log("connectionsList",connectionsList)

    useEffect(()=>{
        connectionsGet()
    },[])
    if(!connectionsList) return
    if(connectionsList.length === 0) return <h1> No connections found</h1>
    return(
        <>
        <div className="text-center my-10">
            <h1> Connections List</h1>
            {connectionsList.map((connection) =>{
                const {firstName, LastName, photoURL, age, gender, about, skills} = connection
                return(
                    <div className="flex m-4 p-4 rounded-lg bg-base-300 w-1/2 m-auto my-2">
                        <div>
                            <img
                            alt="photo"
                            className="w-20 h-20 rounded-full"
                            src={photoURL}
                            >
                            </img>
                            </div>
                            <div className="text-left mx-4">
                                <h2 className="font-bold text-xl">
                                    {firstName+ " " + LastName}
                                </h2>
                                {age && gender && <p> {age + "   " + gender}</p>}
                                <p> {skills.join(", ")}</p>
                                <p> {about}</p>
                                </div>
                    </div>
                )
            })}
        </div>

        </>
    )
}

export default Connections