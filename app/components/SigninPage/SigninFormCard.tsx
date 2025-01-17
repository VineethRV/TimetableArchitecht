"use client";
import { Button, Card, Input } from "antd";
import React, { useState } from "react";
import { Checkbox } from "antd";
import { useRouter } from "next/navigation";

import { toast } from "sonner";
import { FaEye, FaEyeSlash, FaUnlockAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { login } from "@/lib/actions/auth";
import { statusCodes } from "@/app/types/statusCodes";

const SigninFormCard = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepLogged, setKeepLogged] = useState(false);

  function signInHandler() {
    console.log(keepLogged)
    const response = login(email, password).then((res) => {
      const statusCode = res.status;

      switch (statusCode) {
        case statusCodes.OK:
          toast.success("User logged in successfully");
          localStorage.setItem('token', res.token)
          if (keepLogged) localStorage.setItem('keepLogged', "true")
          router.push('/dashboard');
          break;
        case statusCodes.NOT_ACCEPTABLE:
          toast.error("Please verify your email to continue");
          break;
        case statusCodes.NOT_FOUND:
          toast.error("User does not exist");
          break;
        case statusCodes.UNAUTHORIZED:
          toast.error("Wrong credentials")
          break;
        case statusCodes.INTERNAL_SERVER_ERROR:
          toast.error("Server error")
          break;
      }
    })

    toast.promise(response, {
      loading: "Logging in !!"
    })
  }

  return (
    <Card className="flex flex-col w-[460px] px-8 rounded-2xl py-3 shadow-lg">
      <h1 className="font-bold text-3xl text-center">Welcome back 👋</h1>
      <div className="flex flex-col space-y-1 mt-6">
        <h1 className="font-bold text-sm">Email</h1>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          size="large"
          placeholder="Enter your email"
          prefix={<CiMail className="pr-2 h-6 w-6" />}
        />
      </div>
      <div className="flex flex-col space-y-1 mt-4">
        <h1 className="font-bold text-sm">Password</h1>
        <Input.Password
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          iconRender={(visible) =>
            visible ? <FaEye /> : <FaEyeSlash />
          }
          prefix={<FaUnlockAlt className="pr-2 w-5 h-5" />}
          className="text-base"
        />
      </div>
      <div className="flex mt-4 justify-between">
        <div className="flex space-x-2">
          <Checkbox onClick={() => setKeepLogged(!keepLogged)} />
          <p className="text-sm font-medium">Keep me logged in</p>
        </div>
        <p onClick={()=>router.push('/forget-password')} className="text-[#636AE8FF] font-medium hover:cursor-pointer text-sm">
          Forget Password ?
        </p>
      </div>
      <Button
        onClick={signInHandler}
        className="mt-3 w-full bg-[#636AE8FF] font-bold py-4 text-white"
      >
        Sign In
      </Button>
      <p className="text-sm text-center mt-4">
        Not a member yet?{" "}
        <span
          onClick={() => router.push("/signup")}
          className="text-[#636AE8FF] font-bold hover:cursor-pointer"
        >
          Register now
        </span>
      </p>
    </Card>
  );
};

export default SigninFormCard;
