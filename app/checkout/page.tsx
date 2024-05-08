"use client";
import React from "react";
import Breadcrumb from "@/components/Shared/Breadcrumb";
import { z } from "zod";
import { formSchema } from "@/Constant/ZodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname } from "next/navigation";
import { useForm } from "react-hook-form";
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
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";

const Checkout = () => {
  const pathname = usePathname();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      number: "",
      address: "",
      email: "",
      type: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div>
      <Breadcrumb routes={pathname} />
      <div className="wrapper px-0 mt-10 mb-20 flex flex-col md:flex-row justify-between relative min-h-screen">
        <div className="w-full">
          <div className="w-full">
            <p className="text-[24px] p-5 leading-[36px] font-medium text-[#1A1A1A]">
              Billing Information
            </p>
          </div>
          <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <div className="flex  justify-between mt-10">
                  <div className="w-full flex flex-col sm:flex-row justify-between md:px-2">
                    <div className="p-5 md:max-w-[600px]">
                      <div className="flex justify-start gap-10 flex-wrap">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem className="w-[260px] max-w-[300px]">
                              <FormLabel>First Name</FormLabel>
                              <FormControl>
                                <Input
                                  autoCapitalize="on"
                                  placeholder="First Name"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription>
                                Enter Your First Name
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem className="w-[260px] max-w-[300px]">
                              <FormLabel>Last Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Last Name" {...field} />
                              </FormControl>
                              <FormDescription>
                                Enter Your Last Name
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="flex justify-start gap-10 flex-wrap mt-8">
                        <FormField
                          control={form.control}
                          name="number"
                          render={({ field }) => (
                            <FormItem className="w-[260px] max-w-[300px]">
                              <FormLabel>Number</FormLabel>
                              <FormControl>
                                <Input placeholder="Number" {...field} />
                              </FormControl>
                              <FormDescription>
                                Enter Your Number
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="address"
                          render={({ field }) => (
                            <FormItem className="w-[260px] max-w-[300px]">
                              <FormLabel>Address</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Enter Your Address"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription>
                                Enter Your Address
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div>
                        <FormField
                          control={form.control}
                          name="address"
                          render={({ field }) => (
                            <FormItem className="w-[260px] max-w-[300px]">
                              <FormLabel>Address</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Enter Your Address"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription>
                                Enter Your Address
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    <div className="mt-10 md:mt-0 md:max-w-[425px] w-full ">
                      <FormField
                        control={form.control}
                        name="type"
                        render={({ field }) => (
                          <FormItem className="w-full p-3 md:p-0 sm:mt-0 mt-16 ">
                            <div>
                              <Card className=" md:mx-2 p-3 md:px-0 w-full mx-auto md:w-[425px]">
                                <div className="p-3">
                                  <div>
                                    <p className="text-[#1A1A1A] text-xl leading-[30px] font-medium">
                                      Order Summery
                                    </p>
                                  </div>
                                  <div className="py-2">
                                    <div className="flex justify-between items-center gap-2">
                                      <div className="flex justify-center items-center gap-2">
                                        <Image
                                          src="/assets/Images/Products/Image.png"
                                          alt="Product Image"
                                          width={60}
                                          height={60}
                                        />
                                        <p className="text-sm text-[#1A1A1A] font-normal">
                                          Green Apple x5
                                        </p>
                                      </div>
                                      <p className="text-sm font-medium">
                                        $70.00
                                      </p>
                                    </div>
                                    <div className="flex justify-between items-center gap-2">
                                      <div className="flex justify-center items-center gap-2">
                                        <Image
                                          src="/assets/Images/Products/Image (1).png"
                                          alt="Product Image"
                                          width={60}
                                          height={60}
                                        />
                                        <p className="text-sm text-[#1A1A1A] font-normal">
                                          Fresh Indian Malta x5
                                        </p>
                                      </div>
                                      <p className="text-sm font-medium">
                                        $70.00
                                      </p>
                                    </div>
                                  </div>
                                  <div className="py-6">
                                    <div className="flex justify-between items-center py-3 border-b">
                                      <p className="text-sm font-normal">
                                        Subtotal:
                                      </p>
                                      <p className="text-sm font-medium">
                                        $84.00
                                      </p>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b">
                                      <p className="text-sm font-normal">
                                        Shipping:
                                      </p>
                                      <p className="text-sm font-medium">
                                        Free
                                      </p>
                                    </div>
                                    <div className="flex justify-between items-center py-3">
                                      <p className="text-sm font-normal">
                                        Total:
                                      </p>
                                      <p className="text-sm font-semibold">
                                        $84.00
                                      </p>
                                    </div>
                                  </div>
                                  <div>
                                    <div>
                                      <p className="text-[20px] font-medium leading-[30px]">
                                        Payment Method
                                      </p>
                                      <div className="my-5">
                                        <FormField
                                          control={form.control}
                                          name="type"
                                          render={({ field }) => (
                                            <FormItem className="space-y-3">
                                              <FormControl>
                                                <RadioGroup
                                                  onValueChange={field.onChange}
                                                  defaultValue={field.value}
                                                  className="flex flex-col space-y-1"
                                                >
                                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                                    <FormControl>
                                                      <RadioGroupItem value="Cash-on-Delivery" />
                                                    </FormControl>
                                                    <FormLabel className="font-normal">
                                                      Cash on Delivery
                                                    </FormLabel>
                                                  </FormItem>
                                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                                    <FormControl>
                                                      <RadioGroupItem value="Paypal" />
                                                    </FormControl>
                                                    <FormLabel className="font-normal">
                                                      Paypal
                                                    </FormLabel>
                                                  </FormItem>
                                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                                    <FormControl>
                                                      <RadioGroupItem value="Amazon Pay" />
                                                    </FormControl>
                                                    <FormLabel className="font-normal">
                                                      Amazon Pay
                                                    </FormLabel>
                                                  </FormItem>
                                                </RadioGroup>
                                              </FormControl>
                                              <FormMessage />
                                            </FormItem>
                                          )}
                                        />
                                      </div>
                                    </div>
                                    <div className="">
                                      <div className="my-10 mb-0 ">
                                        <Button
                                          type="submit"
                                          className="h-full w-full py-4 text-white px-10 hover:bg-[#2C742F] bg-[#00B207] transition duration-300 text-base font-semibold rounded-[43px] mb-2"
                                        >
                                          Place Order
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Card>
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </Form>
          </div>
        </div>
        <div className="mx-2"></div>
      </div>
    </div>
  );
};

export default Checkout;
