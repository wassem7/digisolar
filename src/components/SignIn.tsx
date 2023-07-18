import { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const SignIn: NextPage = () => {
  const router = useRouter();
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const res = await signIn("google", {
      redirect: false,
      callbackUrl: `${window.location.origin}/dashboard`,
    });

    // console.log(res);
  };
  return (
    <div className=" flex min-h-screen  flex-col items-center justify-center bg-black">
      <div className=" /w-full relative m-8 flex flex-col items-center justify-center rounded-xl border bg-[#141414] px-14 py-20 shadow-md backdrop-blur-sm backdrop-filter focus:outline-none">
        {/* <div className="flex items-center rounded-lg bg-white ">
            <h1>Hello</h1>
          </div> */}

        <div className="/absolute flex-co /bg-purple-500 -mt-11 mb-4 flex ">
          <Image
            className="h-64 w-64"
            src="/logo.png"
            width={300}
            height={300}
            alt="DigiSolar Logo"
          />
        </div>

        {/* TEXT AREA */}
        <div className="/bg-blue-600  -mt-8  flex w-full items-center justify-center text-center ">
          {/* <h1 className="mb-1 text-5xl font-bold text-white  ">
            All in one platform{" "}
          </h1>
          <p className="mb-3 bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-3xl font-semibold text-transparent">
            for your AI/Productivity Learning tools
          </p> */}

          <button
            onClick={handleSubmit}
            className=" flex w-72  justify-center   rounded-md   border border-gray-100 bg-gray-400 bg-opacity-10 px-4   py-2 text-center  text-sm  font-medium  text-white shadow-sm backdrop-blur-sm backdrop-filter focus:outline-none focus:ring-2 focus:ring-gray-400 "
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
