import { useCookies } from 'react-cookie'

import {
  Card,
  CardDescription,
  CardFooter,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { Claim } from '../Claim/Claim.tsx'
import { useState } from 'react'
import { motion } from 'framer-motion'

export const Info = () => {
  const [currentUser, , removeCurrentUser] = useCookies(['currentUser'])
  const [claimed, setClaimed] = useState(false)

  const date = new Date()

  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()

  let currentDate = `${day}-${month}-${year}`

  return (
    <>
      <div className="p-6">
        <div className="my-6 flex items-center">
          <button
            className="border-2 flex items-center p-2 rounded-lg hover:p-3 transition-all
            bg-[#FEF7E4] text-[#333330] border-[#FEF7E4]
            "
            onClick={() => {
              removeCurrentUser('currentUser', { path: '/' })
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-[#333330] hover:text-black"
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
        <Card className="bg-[#FEF7E4] text-[#333330] border-[#FEF7E4] p-4 my-12">
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
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    claimed ? { opacity: 1, y: 0 } : { opacity: 1, scale: 1.1 }
                  }
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  {currentUser.currentUser.member_details.position_name} has
                  claimed the promo at {currentDate}
                </motion.div>
              </CardFooter>
            </>
          ) : (
            <>
              <CardFooter>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    claimed ? { opacity: 1, y: 0 } : { opacity: 1, scale: 1.1 }
                  }
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <span
                    onClick={() => {
                      setClaimed(!claimed)
                    }}
                  >
                    <Claim></Claim>
                  </span>
                </motion.div>
              </CardFooter>
            </>
          )}
        </Card>
      </div>
    </>
  )
}

export default Info
