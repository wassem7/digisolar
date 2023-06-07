import { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/router";
const SignIn: NextPage = () => {
  const router = useRouter();
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const res = await signIn("google", {
      redirect: false,
      callbackUrl: `${window.location.origin}/dashboardhome`,
    });

    // console.log(res);
  };
  return (
    <>
      <div className="flex min-h-screen flex-col justify-center bg-slate-100 py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-center text-3xl font-extrabold text-transparent ">
            WATER PURITY CHECKER
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-slate-200 px-4 py-8 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent  bg-blue-400 px-4 py-2 text-sm font-medium text-white  shadow-sm hover:bg-[#06cbe5] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                >
                  Sign in with Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignIn;
