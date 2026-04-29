"use client";

import { Checkbox, Form, InputGroup } from "@heroui/react";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";

import { useState } from "react";
import { signUp } from "../../lib/auth-client";
import { useRouter } from "next/navigation";



const RegisterPage = () => {
  const router = useRouter();

  const [isVisible, setIsVisible] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
     console.log(userData);

    const { data, error } = await signUp.email({
      name: userData.name, // required
      email: userData.email, // required
      image:  userData.image,
      password: userData.password, // required
     
    })
    // console.log(data, error , "signup register")
    if(!error){
      router.push('/')
    }

    if (error) {
      alert(error.message)
    }
    if (data) {
      alert("signup successful");
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center px-4">

      <div className="w-full  backdrop-blur-xl bg-white/70 border border-gray-200 shadow rounded-2xl p-8 max-w-[400px]  bg-gradient-to-br from-indigo-100 via-white to-emerald-100 ">

        <h1 className="text-2xl font-bold text-center mb-5 ">
          Register your account
        </h1>

        <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
          {/* name */}
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}>
            <Label>Name</Label>
            <Input placeholder="Enter Your Name" />
            <FieldError />
          </TextField>
          
          {/* photo */}
          <TextField
            isRequired
            name="image"
            validate={(value) => {
              if (value.length < 3) {
                return "Enter photo url";
              }
              return null;
            }}>
            <Label>Photo URL</Label>
            <Input placeholder="Enter url" />
            <FieldError />
          </TextField>

          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
              ) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input
              placeholder="Enter your email"
              className="rounded-xl"
            />
            <FieldError />
          </TextField>

          {/* Password */}
          <TextField className="w-full" name="password">
            <Label>Password</Label>
            <InputGroup className='rounded-2xl overflow-hidden'>
              <InputGroup.Input
                className="w-full max-w-[280px]"
                type={isVisible ? "text" : "password"}
                name="password"
                placeholder="Your Password"
              />
              <InputGroup.Suffix className="pr-0">
                <Button
                  isIconOnly
                  aria-label={isVisible ? "Hide password" : "Show password"}
                  size="sm"
                  variant="ghost"
                  onPress={() => setIsVisible(!isVisible)}
                >
                  {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
                </Button>
              </InputGroup.Suffix>
            </InputGroup>
          </TextField>
          <Checkbox value="writing">
            <Checkbox.Control className="bg-purple-300 rounded-full">
              <Checkbox.Indicator />
            </Checkbox.Control>
            <Checkbox.Content>
              <Label>Accept Term & Conditions</Label>
            </Checkbox.Content>
          </Checkbox>

          {/* Buttons */}
          <div className="flex flex-col gap-3 mt-2">

            <Button
              type="submit"
              className="w-full rounded-2xl bg-indigo-100 text-black
                             hover:bg-indigo-700 hover:text-white border border-blue-400
                              transition-all duration-200">
              <Check className="mr-2" />
              Register
            </Button>

            <Button
              type="reset"
              variant="bordered"
              className="w-full rounded-2xl bg-indigo-100 text-black
                             hover:bg-indigo-700 hover:text-white border border-blue-400
                              transition-all duration-200">
              Reset
            </Button>
          </div>
        </Form>

        {/* Footer */}
        <p className="text-xs text-gray-500 text-center mt-6">
          Already have an account?{" "}
          <Link href="/login">
            <span className="text-indigo-600 cursor-pointer hover:underline">
              Login
            </span>
          </Link>
        </p>

      </div>
    </div>
  );
};

export default RegisterPage;