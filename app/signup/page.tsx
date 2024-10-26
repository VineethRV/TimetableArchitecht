import React from "react";
import Topbar from "../components/SignupPage/Topbar";
import SignupForm from "../components/SignupPage/SignupForm";
import Footer from "../components/SignupPage/Footer";
import QuoteSection from "../components/SignupPage/QuoteSection";

const Page = () => {
  return (
    <main className="grid grid-cols-2 h-screen">
      <div className="flex flex-col justify-between py-4 px-6">
        <Topbar />
        <SignupForm />
        <Footer />
      </div>
      <QuoteSection />
    </main>
  );
};

export default Page;
