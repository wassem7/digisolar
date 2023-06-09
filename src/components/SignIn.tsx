import { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Footer from "./Footer";
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
    <>
      <div className="flex min-h-screen ">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <div className="flex items-center space-x-2">
                <Image
                  className="h-12 w-auto"
                  src="/waterlogo.png"
                  alt="Water Purity Checker"
                  width={1080}
                  height={1080}
                />
                <div>
                  <h1 className="font-extrabold">Water Purity Checker</h1>
                </div>
              </div>

              <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
                Sign in to your account
              </h2>
            </div>

            <div className="mt-8">
              <div className="mt-6">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md border border-transparent bg-blue-400 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                  >
                    Continue with Google
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden min-h-full w-0 flex-1 lg:block">
          <Image
            className="absolute inset-0 h-full w-full object-cover brightness-50"
            src="/waterpic.jpg"
            alt="Water Picture"
            height={5184}
            width={3456}
          />
        </div>
      </div>
    </>
  );
};
export default SignIn;
