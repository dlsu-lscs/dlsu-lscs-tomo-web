import { Button } from "@/components/ui/button"

import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

export const Claim = () =>{
  //Constant URI LINK
  const URLLINK = "http://tomo-scanner.app.dlsu-lscs.org";
  const [currentUser,,] = useCookies(["currentUser"]);

  const fetchData = async () => {
    try {
      const response = await axios.post(
        `${URLLINK}/validate`,
        { studentId: Number(currentUser.currentUser.member_details.id) },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
     location.reload(); 
    } catch (error) {
        if(error.name == "AxiosError"){
          console.log(error.response.data.message)
        }else{
        }
      console.log(error);
    }
  };

  return (<>
    {currentUser.currentUser.status == "The member is ineligible" ? (<>
 <Button variant="outline" onClick={fetchData} className="text-white bg-black" >Claim Promo</Button>
    </>) : (<>
 <Button variant="outline" onClick={fetchData} className="text-white bg-black" >Claim Promo</Button>
      </>)}
  </>)
}

export default Claim;
