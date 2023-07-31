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
  const { data: phdata } = api.reading.getpower.useQuery();
console.log('SOlar readings',phdata)
  if (!phdata) {
    return (
      <h1 className="font-semibold tracking-wider text-amber-500">
        Loading Power data
      </h1>
    );
  }
  const options: ChartOptions = {
    responsive: true,
    scales: {
      y: {
        ticks: {
          stepSize: 0.01,
        },
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "POWER VALUE CHART ",
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

  console.log("FORMATTED TIMES", formattedTimes);

  const labels = formattedTimes.map((phvalue) => phvalue);

  const data = {
    labels,

    datasets: [
      {
        label: "POWER Readings",
        data: phdata.map((phvalue) => phvalue.power),
        borderColor: "#fbbf24",
        backgroundColor: "#c2410c",
      },
    ],
  };

  return <Line options={options} data={data} />;
}
