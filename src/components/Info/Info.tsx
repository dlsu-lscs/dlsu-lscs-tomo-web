import { useCookies } from "react-cookie";

import {
  Card,
  CardDescription,
  CardFooter,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Claim } from "../Claim/Claim.tsx";
import { useState } from "react";

export const Info = () => {
  const [currentUser, , removeCurrentUser] = useCookies(["currentUser"]);
  const [claimed, setClaimed] = useState(false);

  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${day}-${month}-${year}`;

  return (
    <>
      <div>
        <div className="my-6 flex items-center">
          <button
            className="border-2 flex p-2 rounded-lg hover:p-3 transition-all"
            onClick={() => {
              removeCurrentUser("currentUser", { path: "/" });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="white"
              className="size-6 hover:text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m7.49 12-3.75 3.75m0 0 3.75 3.75m-3.75-3.75h16.5V4.499"
              />
            </svg>
            <div className="mx-3 text-xl font-bold">Go Back</div>
          </button>
        </div>
        <Card className="bg-black text-white border-4 p-4 my-12">
          <CardHeader>
            <CardTitle className="font-bold">
              {currentUser.currentUser.member_details.full_name}
            </CardTitle>
            <CardDescription className="opacity-75">
              {currentUser.currentUser.member_details.id}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div>{currentUser.currentUser.status}</div>
          </CardContent>
          {claimed ? (
            <>
              <CardFooter>
                {currentUser.currentUser.member_details.position_name} has
                claimed the promo at {currentDate}
              </CardFooter>
            </>
          ) : (
            <>
              <CardFooter>
                <span
                  onClick={() => {
                    setClaimed(!claimed);
                  }}
                >
                  <Claim></Claim>
                </span>
              </CardFooter>
            </>
          )}
        </Card>
      </div>
    </>
  );
};

export default Info;
