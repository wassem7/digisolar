const userNavigation = [{ name: "Sign out", href: "#" }];
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

import { useRouter } from "next/router";
import React from "react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Topbar = () => {
  const router = useRouter();
  const { data: session } = useSession();
  console.log(session);

  return (
    <>
      <div className="/mx-4 /absolute /inset-x-full /sm:mx-[500px]   /bg-yellow-500 fixed inset-x-0   top-2 z-10   p-4 lg:mx-80 ">
        <div className="/justify-evenly /justify-center flex h-[50px] items-center justify-around rounded-3xl border border-gray-100 bg-gray-400 bg-opacity-20  px-4 py-2 text-center text-sm font-medium shadow-2xl backdrop-blur-sm backdrop-filter focus:outline-none focus:ring-2 focus:ring-gray-400 ">
          {/* Home box */}
          <div
            className={`${
              router.asPath === "/home" && "bg-[#303336]"
            } flex items-center  justify-center rounded-2xl px-3 py-[5.4px] text-white hover:cursor-pointer hover:bg-[#303336]`}
          >
            <h1 className="text-base">Home</h1>
          </div>

          <div
            className={`${
              router.asPath === "/home" && "bg-[#303336]"
            } flex items-center  justify-center rounded-2xl px-3 py-[5.4px] text-white hover:cursor-pointer hover:bg-[#303336]`}
          >
            <h1 className="text-base">FAQ</h1>
          </div>

          <div
            onClick={() =>
              void signOut({
                redirect: true,
                callbackUrl: `${window.location.origin}/`,
              })
            }
            className={`${
              router.asPath === "/home" && "bg-[#303336]"
            } flex items-center  justify-center rounded-2xl px-3 py-[5.4px] text-white hover:cursor-pointer hover:bg-[#303336]`}
          >
            <h1 className="text-base">Logout</h1>
          </div>
          {/* Logout box */}
          <div
            className={` flex items-center  justify-center rounded-2xl px-3 py-[5.4px] text-white hover:cursor-pointer `}
          >
            <div className="flex min-w-[30px] items-center justify-center">
              <Image
                className="/inline-block  w-18 h-18 rounded-full sm:h-8 sm:w-8"
                src="/logo2.png"
                alt=""
                width={500}
                height={500}
              />
              <h1 className="ml-2 font-bold">DigiSolar</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;

import { getServerAuthSession } from "@/server/auth";
import { type GetServerSideProps } from "next";

import { generateSSGHelper } from "@/server/api/helpers/ssgHelper";

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const session = await getServerAuthSession(ctx);

//   return {
//     props: { session },
//   };
// };

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const session = await getServerAuthSession(ctx);

//   return {
//     props: { session },
//   };
// };
