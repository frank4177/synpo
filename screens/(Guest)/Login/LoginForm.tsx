"use client";

import Spinner from "@/components/Loaders/Spinner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authentication } from "@/config/firebaseConfig";
import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { EyeIcon, SearchIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const LoginForm = () => {
  const [loading, setLoading] = useState({
    googleLoading: false,
    facebookLoading: false,
    appleLoading: false,
  });

  const showPassword = () => {
    console.log("ppp");
  };

  const signWithGoogle = async () => {
    setLoading({ ...loading, googleLoading: true });

    const provider = new GoogleAuthProvider();

    try {
      const res = await signInWithPopup(authentication, provider);

      setLoading({ ...loading, googleLoading: false });
      console.log(res);
    } catch (error) {
      console.log(error);
      setLoading({ ...loading, googleLoading: false });
    }
  };

  const signWithFacebook = async () => {
    setLoading({ ...loading, facebookLoading: true });

    const provider = new FacebookAuthProvider();

    try {
      const res = await signInWithPopup(authentication, provider);

      setLoading({ ...loading, facebookLoading: false });
      console.log(res);
    } catch (error) {
      console.log(error);
      setLoading({ ...loading, facebookLoading: false });
    }
  };

  const signWithApple = async () => {
    setLoading({ ...loading, appleLoading: true });

    const provider = new GoogleAuthProvider();

    try {
      const res = await signInWithPopup(authentication, provider);

      setLoading({ ...loading, appleLoading: false });
      console.log(res);
    } catch (error) {
      console.log(error);
      setLoading({ ...loading, appleLoading: false });
    }
  };

  return (
    <>
      <div className="max-w-[350px] h- w-full bg-white rounded-md mt-10 p-5 space-y-5">
        <span>Log In</span>
        <Input type="email" placeholder="E-mail" className="h-[50px]" />
        <div className="relative h-10 max-w-[557px]">
          <Input
            type="password"
            placeholder="Password"
            className="pr-10 pl-3 h-[50px] py-2 text-[14px] w-full border  border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D4DCF1] focus:border-transparent" // Add additional styling as needed
            value=""
          />
          <div
            className="absolute right-3 top-6 transform -translate-y-1/2 text-gray-500 z-10 cursor-pointer"
            onClick={showPassword}
          >
            {" "}
            <EyeIcon />
          </div>
        </div>

        <Button className="w-full">LOG IN</Button>

        <div className="flex flex-row items-center text-[11px]">
          <hr className="border-[1px] border-[#3366FF59] w-full" />
          <span className="m-2">Or</span>{" "}
          <hr className="border-[1px] border-[#3366FF59] w-full" />
        </div>

        <Button
          className="flex flex-row items-center h-[44px] border-[1px] border-[#D8DAE5] gap-3 w-full bg-white"
          onClick={signWithGoogle}
        >
          <Image
            src="/icons/google-icon.svg"
            width={24}
            height={24}
            alt="google icon"
          />
          <span className="text-black">Log in with Google</span>
          {loading.googleLoading && <Spinner />}
        </Button>
        <Button className="flex flex-row items-center h-[44px]  border-[1px] border-[#D8DAE5] gap-3 w-full bg-white" onClick={signWithFacebook}>
          <Image
            src="/icons/facebook-icon.svg"
            width={24}
            height={24}
            alt="google icon"
          />
          <span className="text-black">Log in with Facebook</span>
          {loading.facebookLoading && <Spinner />}
        </Button>
        <Button className="flex flex-row items-center h-[44px]  border-[1px] border-[#D8DAE5] gap-3 w-full bg-white">
          <Image
            src="/icons/apple-icon.svg"
            width={24}
            height={24}
            alt="google icon"
          />
          <span className="text-black">Log in with Apple</span>
          {loading.appleLoading && <Spinner />}
        </Button>
      </div>
    </>
  );
};

export default LoginForm;
