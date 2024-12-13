import React from 'react'
import { Button } from "@/components/ui/button"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useToast } from "@/hooks/use-toast"

import { Input } from "@/components/ui/input"
import { SignupValidation } from '@/lib/validation'
import Loader from '@/components/shared/Loader'
import { Link } from 'react-router-dom'
import { useCreateUserAccountMutatuion } from '@/lib/react-query/queriesAndMutations'



const SignupForm = () => {
  const { toast } = useToast()

  const {mutateAsync: createUserAccount, isLoading: isCreatingUser} = useCreateUserAccountMutatuion();

    // 1. Define your form.
    const form = useForm<z.infer<typeof SignupValidation>>({
      resolver: zodResolver(SignupValidation),
      defaultValues: {
        name: "",
        username: "",
        email: "",
        password: "",
      },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof SignupValidation>) {
      // Do something with the form values.

      const newUser = await createUserAccount(values);
      if(!newUser){
        return toast({
          title: "Sign up failed.",
          description: "Please try again!",
        })

        //const session = await signInAccount()
      }

      // ✅ This will be type-safe and validated.
      console.log(values)
    }

  return (
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col">
        <img src="assets/images/logo.svg" alt="logo" className="invert" />
        <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">
          Create new account
        </h2>
        <p className="text-light-3 small-medium md:base-regular">
          Register with your student mal to use NUML Connect.
        </p>
      

        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type="text" className='shad-input' placeholder="Your full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type="text" className='shad-input' placeholder="Set your username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" className='shad-input' placeholder="numl-s23-20966@numls.edu.pk" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" className='shad-input' placeholder="********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className='shad-button_primary'>
            {isCreatingUser ? (
              <div className='flex-center gap-2'>
                <Loader /> Loading...
                </div>
                ) :"Sign Up"
              
            }
          </Button>
          <p className='text-small-regular text-light-2 text-center m-2'>
            Already have an account?
            <Link to="/signin" className='text-primary-500 text-small-semibold ml-1'>
              Login In
            </Link>

          </p>
        </form>
      </div>
    </Form>
  )
}

export default SignupForm