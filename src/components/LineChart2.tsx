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
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "TURBIDITY VALUE CHART (LAST 6 HOURS) ",
    },
  },
};

const labels = [
  "6:00AM",
  "7:00AM",
  "8:00AM",
  "9:00AM",
  "10:00AM",
  "11:00AM",
  "12:00AM",
];

export const data = {
  labels,
  datasets: [
    // {
    //   label: "Dataset 1",
    //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    //   borderColor: "rgb(255, 99, 132)",
    //   backgroundColor: "rgba(255, 99, 132, 0.5)",
    // },
    {
      label: "TURBIDITY Readings",
      data: labels.map(() => faker.datatype.number({ min: 0.0, max: 1.0 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export function LineChart2() {
  return <Line options={options} data={data} />;
}
