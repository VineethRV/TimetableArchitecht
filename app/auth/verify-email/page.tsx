"use client";

import { useSearchParams } from "next/navigation";
import React, { useEffect, useState, Suspense } from "react";
import Loading from "@/app/components/Loading/Loading";
import Header from "@/app/components/SigninPage/Header";
import { verifyEmail } from "@/lib/actions/auth";

const VerifyEmail = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [loading, setLoading] = useState(true);
  const [verificationStatus, setVerificationStatus] = useState(false);

  function verifyEmailHandler() {
    verifyEmail(token || "").then((res) => {
      if (res) {
        setVerificationStatus(true);
      }
      setLoading(false);
    });
  }

  useEffect(() => {
    verifyEmailHandler();
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        {loading ? (
          <Loading />
        ) : (
          <div className="verification-container bg-white shadow-lg rounded-xl p-8 text-center max-w-md">
            {verificationStatus ? (
              <>
                <h1 className="text-2xl font-bold text-green-600 mb-4">
                  Email Verified Successfully
                </h1>
                <p className="text-gray-600 mb-6">
                  Your email has been verified. You can now log in to your
                  account.
                </p>
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out"
                  onClick={() => (window.location.href = "/signin")}
                >
                  Go to Login
                </button>
              </>
            ) : (
              <>
                <h1 className="text-2xl font-bold text-red-600 mb-4">
                  Invalid Email Verification
                </h1>
                <p className="text-gray-600 mb-6">
                  The verification link is invalid or has expired. Please try
                  verifying your email again.
                </p>
                <button
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out"
                  onClick={() =>
                    (window.location.href = "/resend-verification")
                  }
                >
                  Resend Verification Email
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <VerifyEmail />
    </Suspense>
  );
}
