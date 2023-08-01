import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";

import { api } from "@/utils/api";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function LineChart() {
  const {
    data: phdata,
    isRefetching,
    refetch,
    isFetched,
  } = api.reading.getpower.useQuery();
  console.log("SOlar readings", phdata);
  if (!phdata) {
    return (
      <h1 className="font-semibold tracking-wider text-amber-500">
        Loading Power data...
      </h1>
    );
  }
  if (isFetched === true) {
    refetch();
  }
  // console.log("ISFETCHED", isFetched);

  const options: ChartOptions = {
    responsive: true,
    scales: {
      y: {
        ticks: {
          stepSize: 0.01,
        },
        title: {
          display: true,
          text: "Power (µW)",
          color: "#ffff",

          font: {
            size: 16, // Set the font size for the y-axis label
          },
        },
      },

      x: {
        title: {
          display: true,
          text: "Time ( AM / PM )",
          color: "#ffff",

          font: {
            size: 16, // Set the font size for the y-axis label
          },
        },
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Power Generated",
        color: "#ffff",

        font: {
          size: 16,
        },
      },
    },
  };

  const formattedTimes = phdata.map((phvalue) => {
    const ph = phvalue.createdAt;
    const hours = ph.getUTCHours();
    const minutes = ph.getUTCMinutes();

    const formattedTime = `${hours}:${minutes} ${hours > 11 ? "PM" : "AM"}`;

    return formattedTime;
  });

  // console.log("FORMATTED TIMES", formattedTimes);

  const labels = formattedTimes.map((phvalue) => phvalue);

  const data = {
    labels,

    datasets: [
      {
        label: "Power Value",
        data: phdata.map((phvalue) => phvalue.power),
        borderColor: "#fbbf24",
        backgroundColor: "#c2410c",
      },
    ],
  };

  return (
    <div className="mt-6 rounded-xl border bg-[#141414]  p-2  shadow-md backdrop-blur-sm backdrop-filter focus:outline-none">
      <Line options={options} data={data} />;
    </div>
  );
}
