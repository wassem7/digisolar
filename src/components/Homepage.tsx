import React from "react";

/* This example requires Tailwind CSS v2.0+ */
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid";
import { LineChart } from "./LineChart";
import { LineChart2 } from "./LineChart2";
import { LineChart3 } from "./LineChart3";
import Footer from "./Footer";
import Dashboard from "@/pages/Layout";

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
  return (
    <Dashboard>
      <div>
        <h3 className="text-lg font-bold leading-6 text-sky-900">
          Last 24 hours
        </h3>
        <dl className="mb-5 mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-3 md:divide-x md:divide-y-0">
          {stats.map((item) => (
            <div key={item.name} className="px-4 py-5 sm:p-6">
              <dt className="text-base font-normal text-gray-900">
                {item.name}
              </dt>
              <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                <div className="flex items-baseline text-2xl font-semibold text-sky-600">
                  {item.stat}
                  <span className="ml-2 text-sm font-medium text-gray-500">
                    from {item.previousStat}
                  </span>
                </div>

                <div
                  className={classNames(
                    item.changeType === "increase"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800",
                    "inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0"
                  )}
                >
                  {item.changeType === "increase" ? (
                    <ArrowUpIcon
                      className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500"
                      aria-hidden="true"
                    />
                  ) : (
                    <ArrowDownIcon
                      className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-red-500"
                      aria-hidden="true"
                    />
                  )}

                  <span className="sr-only">
                    {" "}
                    {item.changeType === "increase"
                      ? "Increased"
                      : "Decreased"}{" "}
                    by{" "}
                  </span>
                  {item.change}
                </div>
              </dd>
            </div>
          ))}
        </dl>
        <div className="mb-5">
          <LineChart />
        </div>
        <div className="mb-5">
          <LineChart2 />
        </div>
        <div className="mb-5">
          <LineChart3 />
        </div>
        {/* <Footer /> */}
      </div>
    </Dashboard>
  );
}
