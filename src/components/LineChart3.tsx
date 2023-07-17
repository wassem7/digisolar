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
import { api } from "@/utils/api";

// const axios = require("axios");
// let phdata;
// axios.get("api/getph").then(function (response) {
//   phdata = response.data;
//   return {
//     phdata,
//   };
//   // console.log(response.data);
//   // console.log("PH DATA", phdata);
// });

// console.log("NEW PH DATA BRO", phdata);

// async function getUserData() {
//   try {
//     const response = await axios.get("http://localhost:3000/api/getph");
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }
// let newdata = await getUserData();
// console.log("NEW USER DATA", newdata);

// const { data: phgetdata } = axios.get("http://localhost:3000/api/getph");

// async function getPhData() {
//   const { data } = await axios.get("http://localhost:3000/api/getph");
//   console.log(data);
// }
// getPhData();
// console.log("PH DATA", getPhData());

// console.log(phdata);

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: "top" as const,
//     },
//     title: {
//       display: true,
//       text: "PH VALUE CHART (LAST 6 HOURS) ",
//     },
//   },
// };

// const labels = [
//   "6:00AM",
//   "7:00AM",
//   "8:00AM",
//   "9:00AM",
//   "10:00AM",
//   "11:00AM",
//   "12:00AM",
// ];

// export const data = {
//   labels,
//   datasets: [
//     // {
//     //   label: "Dataset 1",
//     //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//     //   borderColor: "rgb(255, 99, 132)",
//     //   backgroundColor: "rgba(255, 99, 132, 0.5)",
//     // },
//     {
//       label: "PH Readings",
//       data: labels.map(() => faker.datatype.number({ min: 1, max: 10 })),
//       borderColor: "rgb(53, 162, 235)",
//       backgroundColor: "rgba(53, 162, 235, 0.5)",
//     },
//   ],
// };

export function LineChart3() {
  const { data: phdata } = api.reading.getconductivity.useQuery();

  if (!phdata) {
    return (
      <h1 className="font-semibold tracking-wider text-sky-500">
        Loading CONDUCTIVITY data
      </h1>
    );
  }
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "CONDUCTIVITY VALUE CHART  ",
      },
    },
  };

  // const labels = [
  //   "6:00AM",
  //   "7:00AM",
  //   "8:00AM",
  //   "9:00AM",
  //   "10:00AM",
  //   "11:00AM",
  //   "12:00AM",
  // ];

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
      // {
      //   label: "Dataset 1",
      //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      //   borderColor: "rgb(255, 99, 132)",
      //   backgroundColor: "rgba(255, 99, 132, 0.5)",
      // },
      {
        label: "CONDUCTIVITY Readings",
        data: phdata.map((phvalue) => phvalue.conductivity),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  // console.log("HMM", phdata);

  return <Line options={options} data={data} />;
}
