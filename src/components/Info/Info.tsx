import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import {Claim} from "../Claim/Claim.tsx";


export const Info = () =>{
  const [currentUser,,] = useCookies(["currentUser"]);

  return (<>
<Card className="bg-black text-white border-4 p-4 my-12">
  <CardHeader>
    <CardTitle className="font-bold">{currentUser.currentUser.member_details.full_name}</CardTitle>
    <CardDescription>{currentUser.currentUser.member_details.id}</CardDescription>
  </CardHeader>
  <CardContent>
    <p>{currentUser.currentUser.status}</p>
  </CardContent>
  <CardFooter>
        <Claim></Claim>
  </CardFooter>
</Card>
  </>)
}

export default Info;
