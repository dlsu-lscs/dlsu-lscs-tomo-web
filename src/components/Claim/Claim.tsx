import { Button } from "@/components/ui/button";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";

export const Claim = () => {
  const URLLINK = "http://tomo-scanner.app.dlsu-lscs.org";
  const [currentUser, setCurrentUser] = useCookies(["currentUser"]);
  const { toast } = useToast();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${URLLINK}/status?studentId=${currentUser.currentUser?.member_details?.id}`,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setCurrentUser("currentUser", response.data, { path: "/", maxAge: 60 });
      toast({
          title: `${currentUser.currentUser?.member_details?.full_name} has claimed the promo`,
          className: "text-white bg-black rounded-lg border-2",
        });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error.response?.data?.message || "An error occurred");
      } else {
        console.error(error);
      }
    }
  };

  const postData = async () => {
    try {
      await axios.post(
        `${URLLINK}/claim`,
        { studentId: Number(currentUser.currentUser?.member_details?.id) },
        { headers: { "Content-Type": "application/json" } }
      );
      
      fetchData();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast({
          title: error.response?.data?.message || "Request failed",
          className: "text-white bg-black rounded-lg border-2",
        });
      }
      console.error(error);
    }
  };

  return (
    <Button
      variant="outline"
      onClick={postData}
      className="text-white bg-black"
    >
      Claim Coffee
    </Button>
  );
};

export default Claim;
