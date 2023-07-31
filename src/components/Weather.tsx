import { api } from "@/utils/api";
import {
  BoltIcon,
  CalendarDaysIcon,
  CloudIcon,
  SunIcon,
} from "@heroicons/react/20/solid";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type powerReadingType = {
  id: string;
  createdAt: Date;
  power: string;
}[];
function findAverage(powerreadings: powerReadingType) {
  if (powerreadings.length === 0) {
    return 0; // Handle the case of an empty array to avoid division by zero.
  }
  const numericValues = powerreadings.map((str) => parseFloat(str.power));
  console.log("NUMERIC VALUES", numericValues);

  const filterednumericValues = numericValues.filter(
    (num) => typeof num === "number" && !isNaN(num)
  );
  const sum = filterednumericValues.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const average = sum / filterednumericValues.length;

  return parseFloat(average.toFixed(1));
}
const Weather = () => {
  const [lat, setLat] = useState<number>();
  const [long, setLong] = useState<number>();
  const [weatherdata, setWeatherData] = useState();

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(function (position) {
  //     setLat(position.coords.latitude);
  //     setLong(position.coords.longitude);
  //   });

  console.log("LATITUDE", lat);
  console.log("LONGITUDE", long);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       navigator.geolocation.getCurrentPosition(function (position) {
  //         setLat(position.coords.latitude);
  //         setLong(position.coords.longitude);
  //       });

  //       await fetch(
  //         `https://api.openweathermap.org/data/2.5/weather/?lat=6.6666&lon=-1.6163&units=metric&APPID=af4f762eec5aa1f39e66aafff9c58678`
  //       )
  //         .then((res) => res.json())
  //         .then((result) => {
  //           setWeatherData(result);
  //           console.log("WEATHER DATA", result);
  //         });
  //     };
  //     fetchData();
  //   }, [weatherdata]);

  const getWeatherData = async () => {
    const lat = 6.6666;
    const long = -1.6163;
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=af4f762eec5aa1f39e66aafff9c58678`
    );
    return res.json();
  };
  const { data: tanweatherdata, isLoading } = useQuery({
    queryKey: ["weatherdata"],
    queryFn: getWeatherData,
  });

  const {
    data: phdata,
    isRefetching,
    refetch,
    isFetched,
  } = api.reading.getpower.useQuery();
  console.log("NEW WEATHER DATA", tanweatherdata);
  if (!phdata) {
    return (
      <h1 className="font-semibold tracking-wider text-amber-500">
        Loading Weather data...
      </h1>
    );
  }

  const averagepower = findAverage(phdata);
  console.log("AVERAGE POWER", averagepower);

  return (
    tanweatherdata && (
      <div className="flex flex-col  rounded-xl border bg-[#141414] p-3  shadow-md backdrop-blur-sm backdrop-filter focus:outline-none">
        <div className="/justify-center /space-x-3 flex items-center justify-evenly rounded-xl bg-[#191919]">
          <Image
            width={1000}
            height={1000}
            alt="Cloud Image"
            className="h-20 w-20"
            src={`https://openweathermap.org/img/wn/${tanweatherdata.weather[0].icon}@2x.png`}
          />
          {/* CITY BOX */}
          <div className="/bg-green-500 space-y-1">
            <h1 className="text-[17px] font-medium text-white">{`${tanweatherdata.name}`}</h1>
            <p className="text-[12px] font-thin text-white">Ghana</p>
          </div>

          {/* TEMP BOX */}
          <div className="/bg-green-500 space-y-1">
            <h1 className="text-xl font-medium text-white">{`${tanweatherdata.main.temp} °C`}</h1>
            <p className="text-[12px] font-thin text-white">Temperature</p>
          </div>

          {/* MIN TEMP BOX */}
          {/* <div className="/bg-green-500 -space-y-1">
            <h1 className="text-xl font-medium text-white">{`${tanweatherdata.main.temp_min} °C`}</h1>
            <p className="text-sm font-thin text-white">Min Temp.</p>
          </div> */}

          {/* MAX TEMP BOX */}
          <div className="/bg-green-500 space-y-1">
            <h1 className="text-xl font-medium text-white">{`${tanweatherdata.main.temp_min} °C`}</h1>
            <p className="text-[12px] font-thin text-white">Max Temp.</p>
          </div>

          {/* SUNRISE BOX */}
          <div className="/bg-green-500 space-y-1">
            <h1 className="text-xl font-medium text-white">{`  ${new Date(
              tanweatherdata.sys.sunrise * 1000
            )
              .toLocaleTimeString("en-IN")
              .substring(0, 4)} AM`}</h1>
            <p className="text-[12px] font-thin text-white">Sunrise</p>
          </div>
          {/* SUNSET BOX */}
          <div className="/bg-green-500 space-y-1">
            <h1 className="text-xl font-medium text-white">{`  ${new Date(
              tanweatherdata.sys.sunset * 1000
            )
              .toLocaleTimeString("en-IN")
              .substring(0, 4)} PM`}</h1>
            <p className="text-sm font-thin text-white">Sunset</p>
          </div>
        </div>

        {/* SECOND LARGE BOX */}
        <div className="/bg-red-500 mt-4 flex h-10 space-x-3  rounded-xl ">
          {/* FIRST BOX */}
          <div className=" /justify-center flex w-1/2  items-center rounded-xl border-2 border-[#1d1d1d] bg-[#191919]">
            <CloudIcon className="ml-2 h-6 w-6 text-amber-400" />
            <div className="/flex-col /space-x-3 /bg-amber-500 mx-3 flex w-full items-center justify-between">
              <h1 className="text-sm text-white"> Status </h1>
              <p className="text-xl text-amber-400">{` ${tanweatherdata.weather[0].description}`}</p>
            </div>
          </div>
          {/* SECOND BOX */}
          <div className=" /justify-center flex w-1/2 items-center rounded-xl border-2 border-[#1d1d1d] bg-[#191919]">
            <BoltIcon className="ml-2 h-6 w-6 text-amber-400" />
            <div className="/flex-col /space-x-3 /bg-amber-500 mx-3 flex w-full items-center justify-between">
              <h1 className="text-sm text-white"> Average Power </h1>
              <p className="text-xl text-amber-400">{`${averagepower}µW`}</p>
            </div>
          </div>
        </div>

        {/* <p className="text-white">{` Sunrise ${new Date(
          tanweatherdata.sys.sunrise * 1000
        ).toLocaleTimeString("en-IN")}`}</p>
        <p className="text-white">{` Sunset ${new Date(
          tanweatherdata.sys.sunset * 1000
        ).toLocaleTimeString("en-IN")}`}</p> */}
        {/* <p className="text-white">{` Description : ${tanweatherdata.weather[0].description}`}</p>

        <p className="text-white">{` Min Temp: ${tanweatherdata.main.temp_min} °C`}</p>

        <p className="text-white">{` Max Temp: ${tanweatherdata.main.temp_max} °C`}</p> */}
        {/* <p className="text-white">Day: Monday</p>
        <p className="text-white">Date:31 July ,2023 </p> */}
      </div>
    )
  );
};

export default Weather;
