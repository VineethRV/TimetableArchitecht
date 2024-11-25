"use client";

import { changePassword, forgetOTP, verifyOTP } from "@/lib/actions/auth";
import { Button, Input } from "antd";
import { useState } from "react";
import { statusCodes } from "../types/statusCodes";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Header from "../components/SigninPage/Header";

const ForgetOTP = () => {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(0);
  const [otp, setOtp] = useState("");
  const [otpToken, setOtpToken] = useState("");
  const [pass, setPass] = useState("");
  const router = useRouter();

  function sendOTP() {
    const res = forgetOTP(email).then((res) => {
      const statusCode = res?.status;
      
      switch (statusCode) {
        case statusCodes.OK:
          toast.success("Otp sent to your mail successfully !!");
          setStep((s) => s + 1);
          break;
        case statusCodes.BAD_REQUEST:
          toast.error("User does not exist");
          break;
        case statusCodes.INTERNAL_SERVER_ERROR:
          toast.error("Server error");
          break;
      }
    });

    toast.promise(res, {
      loading: "Sending otp ...",
    });
  }

  function verifyOTPHandler() {
    const res = verifyOTP(email, Number(otp)).then((res) => {
      const statusCode = res.status;

      switch (statusCode) {
        case statusCodes.OK:
          toast.success("Otp verified successfully !!");
          setOtpToken(res.token);
          setStep((s) => s + 1);
          break;
        case statusCodes.BAD_REQUEST:
          toast.error("Otp is invalid !!");
          break;
        case statusCodes.INTERNAL_SERVER_ERROR:
          toast.error("Server error !!");
          break;
      }
    });

    toast.promise(res, {
      loading: "Verifying otp ...",
    });
  }

  function resetPasswordHandler() {
    const res = changePassword(otpToken, email, pass).then((res) => {
      const statusCode = res.status;

      switch (statusCode) {
        case statusCodes.OK:
          toast.success("Password reseted successfully !!");
          setTimeout(() => {
            toast.info("Login to continue");
            router.push("/signin");
          }, 3000);
          break;
        case statusCodes.BAD_REQUEST:
          toast.error("Invalid request");
          break;
        case statusCodes.INTERNAL_SERVER_ERROR:
          toast.error("Server error");
          break;
      }
    });

    toast.promise(res, {
      loading: "Reseting password !!",
    });
  }

  const renderContent = () => {
    switch (step) {
      case 0:
        return (
          <>
            <div className="flex space-y-1 flex-col">
              <h1 className="font-bold">Please enter your email to continue</h1>
              <Input value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <Button onClick={sendOTP}>Send OTP</Button>
          </>
        );
      case 1:
        return (
          <>
            <h1 className="font-bold">Enter otp to continue</h1>
            <div className="w-[360px]">
              <Input.OTP
                value={otp}
                onChange={(e) => setOtp(e)}
                type="number"
                length={6}
              />
            </div>
            <Button onClick={verifyOTPHandler}>Verify</Button>
          </>
        );
      case 2:
        return (
          <>
            <h1 className="font-bold">Enter your new password</h1>
            <Input.Password
              className="w-[300px]"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="Enter your new password .."
            />
            <Button onClick={resetPasswordHandler}>Reset</Button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex justify-center items-center flex-grow">
        <div className="flex flex-col space-y-6 p-8 shadow-md rounded-xl">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default ForgetOTP;
