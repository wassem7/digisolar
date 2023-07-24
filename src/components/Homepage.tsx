import React from "react";

/* This example requires Tailwind CSS v2.0+ */
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid";
import { LineChart } from "./LineChart";
import { LineChart2 } from "./LineChart2";
import { LineChart3 } from "./LineChart3";
import Dashboard from "@/pages/Layout";
import Topbar from "./Topbar";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const stats = [
  {
    name: "PH VALUE",
    stat: "6.5",
    previousStat: "5.0",
    change: "12%",
    changeType: "increase",
  },
  {
    name: "TURBIDITY VALUE",
    stat: "0.8",
    previousStat: "0.6",
    change: "2.02%",
    changeType: "increase",
  },
  {
    name: "CONDUCTIVITY VALUE",
    stat: "300",
    previousStat: "350",
    change: "4.05%",
    changeType: "decrease",
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Homepage() {
  const { data: sessionData } = useSession();
  const router = useRouter();
  console.log("SESSION DATA", sessionData);
  if (!sessionData) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-black">
        <h1 className="text-white">Login to continue</h1>
        <button
          className="mt-2 rounded-lg bg-yellow-400 px-3 py-2 hover:cursor-pointer"
          onClick={() => router.push("/login")}
        >
          SignIn
        </button>
      </div>
    );
  }
  return (
    <div className="relative mx-auto flex min-h-screen justify-center bg-black">
      <Topbar />
      <div className="/bg-green-500 mb-5 mt-28 flex w-1/2">
        <LineChart />
      </div>
      {/* <div className="mb-5">
          <LineChart2 />
        </div> */}

      {/* <Footer /> */}
    </div>
  );
}
