import { Button } from "@/components/ui/button"

import { useCookies } from "react-cookie";
import axios from "axios";
import { useToast } from "@/hooks/use-toast"


export const Claim = () =>{
  //Constant URI LINK
  const URLLINK = "http://tomo-scanner.app.dlsu-lscs.org";
  const [currentUser,setCurrentUser,] = useCookies(["currentUser"]);
    const { toast } = useToast()

    const fetchData = async () => {
      try {
        const response = await axios.get(`${URLLINK}/status?studentId=` + currentUser.currentUser.member_details.id, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setCurrentUser("currentUser", response.data, {path: "/", maxAge: 60});
        toast({
          title: `${currentUser.currentUser.member_details.full_name} has Claimed the Promo`,
          className: "text-white bg-black rounded-lg border-2"
        })
      } catch (error) {
        if(error.name == "AxiosError"){
          console.log(error.response.data.message)
        }else{
        console.log(error);
        }
      }
    };

  const postData = async () => {
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
      console.log(response);
      fetchData();
    } catch (error) {
        if(error.name == "AxiosError"){
        toast({
          title: error.response.data.message,
          className: "text-white bg-black rounded-lg border-2"
        })
        }else{
        }
      console.log(error);
    }
  };

  return (<>
    {currentUser.currentUser.status == "The member is ineligible" ? (<>
 <Button variant="outline" onClick={postData} className="text-white bg-black" >Claim Promo</Button>
    </>) : (<>
 <Button variant="outline" onClick={postData} className="text-white bg-black" >Claim Promo</Button>
      </>)}
  </>)
}

export default Claim;
