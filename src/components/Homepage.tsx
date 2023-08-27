import React from "react";

import { LineChart } from "./LineChart";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Weather from "./Weather";

import Layout from "./Layout";

export default function Homepage() {
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
    <Layout>
      <Weather />
      <LineChart />
    </Layout>
  );
}
