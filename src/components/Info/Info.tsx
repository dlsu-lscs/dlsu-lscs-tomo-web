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

export const Info = () => {
  const [currentUser, , removeCurrentUser] = useCookies(["currentUser"]);

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
            <CardDescription>
              {currentUser.currentUser.member_details.id}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div>{currentUser.currentUser.status}</div>
          </CardContent>
          <CardFooter>
            <Claim></Claim>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Info;
