import React from "react";
import Layout from "./Layout";

const FaqPage = () => {
  return (
    <div className="">
      {/* FIRST BOX */}
      <div className="mb-10">
        <h1 className="mb-1 font-bold text-amber-500">
          What is a solar tracking system ?
        </h1>

        <p className="text-white">
          A solar tracking system is a mechanism that follows the movement of
          the sun to orient solar panels optimally. This ensures that solar
          panels receive maximum sunlight throughout the day, enhancing energy
          generation efficiency.
        </p>
      </div>

      {/* SECOND BOX */}
      <div className="mb-10">
        <h1 className="mb-1 font-bold text-amber-500">
          How does the solar tracking system work?
        </h1>

        <p className="text-white">
          The solar tracking system utilizes sensors to detect the sun's
          position, allowing it to adjust the solar panels' orientation
          accordingly. By tracking the sun's movement, the system ensures that
          the panels are perpendicular to the sun's rays, maximizing energy
          capture.
        </p>
      </div>

      {/* THIRD BOX */}
      <div className="mb-10">
        <h1 className="mb-1 font-bold text-amber-500">
          What are the benefits of a solar tracking system?
        </h1>

        <p className="text-white">
          Solar tracking systems offer several advantages, including up to 25%
          more energy generation compared to fixed solar panels. They improve
          overall system efficiency, increase energy output, and reduce reliance
          on additional solar panel installations.
        </p>
      </div>

      {/* FOURTH BOX */}
      <div className="mb-10">
        <h1 className="mb-1 font-bold text-amber-500">
          How accurate is the solar tracking system in following the sun?
        </h1>

        <p className="text-white">
          The solar tracking system is designed to be highly accurate in
          following the sun's path. Using precise sensors and control
          algorithms, it adjusts the solar panel orientation throughout the day
          to maintain optimal alignment.
        </p>
      </div>

      {/* FOURTH BOX */}
      <div className="mb-10">
        <h1 className="mb-1 font-bold text-amber-500">
          Can I install the solar tracking system myself?
        </h1>

        <p className="text-white">
          Yes, the solar tracking system is designed for ease of installation
          and can be set up by individuals with basic technical knowledge.
          However, it is recommended to follow the provided installation
          guidelines for optimal performance.
        </p>
      </div>

      {/* FIFTH BOX */}
      <div className="mb-10">
        <h1 className="mb-1 font-bold text-amber-500">
          What type of solar panels are compatible with the tracking system?
        </h1>

        <p className="text-white">
          The solar tracking system is compatible with most types of solar
          panels, including monocrystalline, polycrystalline, and thin-film
          panels.
        </p>
      </div>

      {/* SIXTH BOX */}
      <div className="mb-10">
        <h1 className="mb-1 font-bold text-amber-500">
          Does the solar tracking system require a continuous internet
          connection?
        </h1>

        <p className="text-white">
          The solar tracking system can operate autonomously without a
          continuous internet connection. However, to access real-time data and
          control the system remotely, an internet connection is needed.
        </p>
      </div>

      {/* SEVENTH BOX */}
      <div className="mb-10">
        <h1 className="mb-1 font-bold text-amber-500">
          Can the solar tracking system withstand harsh weather conditions?
        </h1>

        <p className="text-white">
          The solar tracking system is designed to be durable and
          weather-resistant. It can withstand various environmental conditions,
          including rain, wind, and moderate snowfall.
        </p>
      </div>

      {/* SEVENTH BOX */}
      <div className="mb-10">
        <h1 className="mb-1 font-bold text-amber-500">
          Does the solar tracking system have safety features?
        </h1>

        <p className="text-white">
          Yes, the solar tracking system includes safety features to protect
          against overtracking and damage during extreme weather events. It also
          has a failsafe mechanism to return to a safe position if any issues
          are detected.
        </p>
      </div>

      {/* SEVENTH BOX */}
      <div className="mb-10">
        <h1 className="mb-1 font-bold text-amber-500">
          How do I monitor the system's performance and energy generation?
        </h1>

        <p className="text-white">
          You can monitor the system's performance and energy generation through
          our web interface, which provides real-time data, historical records,
          and analytics on the energy produced.
        </p>
      </div>
    </div>
  );
};

export default FaqPage;
