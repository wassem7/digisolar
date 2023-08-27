import React from "react";

import Topbar from "./Topbar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const { data: sessionData } = useSession();
  const router = useRouter();
  console.log("SESSION DATA", sessionData);
  // if (!sessionData) {
  //   return (
  //     <div className="flex min-h-screen flex-col items-center justify-center bg-black">
  //       <h1 className="text-white">Login to continue</h1>
  //       <button
  //         className="mt-2 rounded-lg bg-yellow-400 px-3 py-2 hover:cursor-pointer"
  //         onClick={() => router.push("/login")}
  //       >
  //         SignIn
  //       </button>
  //     </div>
  //   );
  // }
  return (
    <div className="relative mx-auto flex min-h-screen justify-center bg-black">
      <Topbar />
      <div className="/bg-green-500 mb-5 mt-28 flex w-1/2 flex-col">
        {children}
      </div>
    </div>
  );
}
