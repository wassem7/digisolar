import { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import LoadingSpinnerYellow from "./LoadingSpinnerYellow";

const SignIn: NextPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loadingspinner, setLoadingSpinner] = useState(false);
  console.log(username);
  console.log(password);
  const router = useRouter();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoadingSpinner(true);
    setError(false);
    const res = await signIn("credentials", {
      username: username,
      password: password,
      isSignUp: false,
      redirect: false,
      callbackUrl: `${window.location.origin}/dashboard`,
    });

    if (res?.error) {
      setLoadingSpinner(false);
      setError(true);
    } else {
      setLoadingSpinner(false);
      router.push(`${window.location.origin}/dashboard`);
    }

    // console.log(res);
  };

  return (
    <div className=" flex min-h-screen  flex-col items-center justify-center bg-black">
      <div className=" /w-full relative m-8 flex flex-col items-center justify-center rounded-xl border bg-[#141414] px-14 py-20 shadow-md backdrop-blur-sm backdrop-filter focus:outline-none">
        <div className="/absolute flex-co /bg-purple-500 -mb-8 -mt-11 flex ">
          <Image
            className="h-64 w-64"
            src="/logo.png"
            width={300}
            height={300}
            alt="DigiSolar Logo"
          />
        </div>

        <form className="/mt-4 space-y-6" onSubmit={handleSubmit}>
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="text"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-lightblack bg-gray-400 bg-opacity-10 px-3 py-2  text-white placeholder-lightblack focus:z-10 focus:border-white focus:outline-none focus:ring-white sm:text-sm"
                placeholder="Username"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                autoComplete="current-password"
                required
                className="relative mb-2 block w-full appearance-none rounded-none rounded-b-md border border-lightblack bg-gray-400 bg-opacity-10 px-3  py-2 text-white placeholder-lightblack focus:z-10 focus:border-white focus:outline-none focus:ring-white sm:text-sm"
                placeholder="Password"
              />
            </div>

            {error && (
              <div className="mt-3 flex justify-center ">
                <p className="text-[10px] text-red-500">
                  Invalid Username/password or Network Error
                </p>
              </div>
            )}
          </div>

          <div>
            <button
              type="submit"
              className=" flex w-72  justify-center   rounded-md   border border-gray-100 bg-gray-400 bg-opacity-10 px-4   py-2 text-center  text-sm  font-medium  text-white shadow-sm backdrop-blur-sm backdrop-filter focus:outline-none focus:ring-2 focus:ring-gray-400 "
            >
              {loadingspinner && (
                <span>
                  <LoadingSpinnerYellow />
                </span>
              )}
              SignIn
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignIn;
