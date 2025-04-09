import axios from "axios";
import { BASE_URL } from "../utils/url";
import { useEffect, useState } from "react";
const Payment = () => {
    const [isPremium , setIsPremium] = useState(false)
    useEffect(()=>{
        verifyPremiumUser()
    },[])
    const verifyPremiumUser = async () =>{
        const res = await axios.get(`${BASE_URL}/premium/verify`, {withCredentials: true})
        setIsPremium(res.data.isPremium);
    }

    const handleBuyClick = async(memberShipType) => {
        console.log("hello")
        try{
            const res = await axios.post(`${BASE_URL}/payment/create`, {
                type: memberShipType,
            },{withCredentials: true})
            const {amount, currency, orderId, notes} = res.data
            console.log(res)
            console.log(notes)
            const options = {
                key: res.data.keyId, // Replace with your Razorpay key_id
                amount,
                currency,
                name: 'DevConnect',
                description: 'connect to other developer',
                order_id: orderId, // This is the order_id created in the backend
                prefill: {
                  name: notes.firstName + " " + notes.LastName,
                  email: notes.emailID
                },
                theme: {
                  color: '#F37254'
                },
                handler :verifyPremiumUser,
              };
        
            console.log(res)
            const rzp = new window.Razorpay(options);
      rzp.open();
        }catch(err){
            console.log("Error", err)
        }
    }
  return isPremium ? ( <h1> your are verify Premium User</h1>): (
    <>
      <div className="m-8">
        <div className="flex w-full flex-col lg:flex-row">
          <div className="card bg-base-300 rounded-box grid h-80 grow place-items-center">
            <h1 className="text-3xl"> One months</h1>
            <ul>
              <li> For only One Months</li>
              <li> 50 Connections request send daily</li>
              <li> Accounct with blue sign</li>
              <li> chat with other user</li>
            </ul>
            <button onClick={() => handleBuyClick("silver")}className="btn btn-active btn-primary">Silver</button>
          </div>
          <div className="divider lg:divider-horizontal">OR</div>
          <div className="card bg-base-300 rounded-box grid h-80 grow place-items-center">
         < h1 className="text-3xl"> Two months</h1>
            <ul>
            <li> For only two Months</li>
              <li> 150 Connections request send daily</li>
              <li> Accounct with blue sign</li>
              <li> chat with other user</li>
              </ul>
              <button onClick={() => handleBuyClick("gold")}className="btn btn-active btn-secondary">gold</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
