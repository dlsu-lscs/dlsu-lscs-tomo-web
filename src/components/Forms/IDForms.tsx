"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { number, z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import axios from "axios";

const IDSchema = z.object({
  idNumber: z.string(),
});

export const IDForms = () => {
  //Constant URI LINK
  const URLLINK = "http://tomo-scanner.app.dlsu-lscs.org";

  const [data, setData] = useState(null);
  const [ID, setID] = useState(null);

 useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://tomo-scanner.app.dlsu-lscs.org/status",
        {studentId: ID},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setData(response.data);
      console.log(response.data);
    };
    fetchData();
  }, [ID]);


  //Forms
  const form = useForm<z.infer<typeof IDSchema>>({
    resolver: zodResolver(IDSchema),
    defaultValues: {
      idNumber: "",
    },
  });

  const onSubmit = (values: z.infer<typeof IDSchema>) => {
    setID(Number(values.idNumber));
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <div className="flex space-x-2">
            <FormField
              control={form.control}
              name="idNumber"
              render={({ field }) => (
                <FormItem className="text-center">
                  <FormControl>
                    <Input
                      placeholder="#1234567"
                      {...field}
                      className="text-black"
                    />
                  </FormControl>
                  <FormMessage></FormMessage>
                </FormItem>
              )}
            />
            <Button type="submit" className="bg-white text-black">
              Submit
            </Button>
          </div>
          <div className="flex justify-center py-2">
            <FormItem className="text-center">
              <FormDescription>Input your ID number instead</FormDescription>
            </FormItem>
          </div>
        </form>
      </Form>
    </>
  );
};

export default IDForms;
