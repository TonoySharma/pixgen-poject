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
import { signIn, signUp } from "../../lib/auth-client";
import { FcGoogle } from "react-icons/fc";
import { CiLogin } from "react-icons/ci";
import { MdOutlineLockReset } from "react-icons/md";


const LoginPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());
        console.log(userData);

        const { data, error } = await signIn.email({
            email: userData.email,
            password: userData.password,
            remember: true,
            callbackURL: "/",
        })
        // console.log(data, error , "signup register")

        if (error) {
            alert(error.message)
        }
        if (data) {
            alert("Login successful");
        }
    };


    return (
        <div className="min-h-screen flex items-center justify-center px-4">

            <div className="w-full  backdrop-blur-xl bg-white/70 border
             border-gray-200 shadow rounded-2xl p-8 max-w-[400px] 
              bg-gradient-to-br from-indigo-100 via-white to-emerald-100 ">

                <h1 className="text-2xl font-bold text-center mb-5 ">
                    Login your account
                </h1>

                <Form className="flex flex-col gap-5" onSubmit={onSubmit}>


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
                            <CiLogin />
                            Login
                        </Button>

                        <Button
                            type="reset"
                            variant="bordered"
                            className="w-full rounded-2xl bg-indigo-100 text-black
                             hover:bg-indigo-700 hover:text-white border border-blue-400
                              transition-all duration-200">
                                <MdOutlineLockReset/>
                            Reset
                        </Button>
                    </div>
                    <Button className="w-full rounded-2xl bg-pink-100 text-black
                             hover:bg-pink-500 hover:text-white border border-pink-400
                              transition-all duration-200" variant="">
                           <FcGoogle />
                           Sign in with Google
                    </Button>
                </Form>

            </div>
        </div>
    );
};

export default LoginPage;