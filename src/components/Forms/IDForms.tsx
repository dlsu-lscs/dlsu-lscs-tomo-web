'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useCookies } from 'react-cookie'

import { useToast } from '@/hooks/use-toast'

const IDSchema = z.object({
  idNumber: z.string(),
})

export const IDForms = () => {
  // Constant URI LINK
  const URLLINK = 'http://tomo-scanner.app.dlsu-lscs.org'
  const { toast } = useToast()

  const [, setCurrentUser] = useCookies(['currentUser'])
  const [ID, setID] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${URLLINK}/status?studentId=${ID}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        setCurrentUser('currentUser', response.data, { path: '/', maxAge: 60 })

        const { full_name, position_name, committee_name } =
          response.data.member_details
        const firstName = full_name.split(' ')[0]

        toast({
          title:
            position_name === 'Member'
              ? `Hello ${firstName}, ${position_name} of La Salle Computer Society`
              : `Hello ${firstName}, ${position_name} of ${committee_name}`,
          className:
            ' bg-[#FEF7E4] text-[#333330] border-[#FEF7E4] rounded-lg border-2',
        })
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log()
          toast({
            title: `${error.response?.data?.message || 'Axios error occurred'}`,
            className:
              ' bg-[#FEF7E4] text-[#333330] border-[#FEF7E4] rounded-lg border-2',
          })
        } else {
          console.log(error)
        }
      }
    }

    if (ID) {
      fetchData()
    }
  }, [ID, setCurrentUser, toast])

  // Forms
  const form = useForm({
    resolver: zodResolver(IDSchema),
    defaultValues: {
      idNumber: '',
    },
  })

  const onSubmit = (values: any) => {
    setID(Number(values.idNumber))
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex justify-center space-x-2">
            <FormField
              control={form.control}
              name="idNumber"
              render={({ field }) => (
                <FormItem className="text-center">
                  <FormControl>
                    <Input
                      placeholder="1234567"
                      {...field}
                      className="bg-[#FEF7E4] text-[#333330]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="bg-[#333330] text-[#FFFF]">
              Verify
            </Button>
          </div>
          <div className="flex justify-center py-2">
            <FormItem className="text-center text-[#FEF7E4]">
              <FormDescription>Input your ID number instead</FormDescription>
            </FormItem>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default IDForms
