import Layout from "@/pages/Layout";
import React from "react";

const FaqPage = () => {
  return (
    <Layout>
      <div className="">
        {/* FIRST BOX */}
        <div className="mb-10">
          <h1 className="mb-1 font-bold text-sky-500">
            What is the Water Purity Sensor Project?{" "}
          </h1>

          <p>
            The Water Purity Sensor Project is an innovative and user-friendly
            system designed to monitor and analyze water quality in real-time.
            It utilizes sensor technology to measure various parameters, such as
            pH levels , and conductivity
          </p>
        </div>

        {/* SECOND BOX */}
        <div className="mb-10">
          <h1 className="mb-1 font-bold text-sky-500">
            How does the Water Purity Sensor work?
          </h1>

          <p>
            Our Water Purity Sensor employs cutting-edge sensors to collect data
            from the water samples. The sensor analyzes the water quality and
            sends the data to our specially designed web app, where it is
            processed and displayed in an intuitive graphical format.
          </p>
        </div>

        {/* THIRD BOX */}
        <div className="mb-10">
          <h1 className="mb-1 font-bold text-sky-500">
            What does the graph represent on the dashboard?
          </h1>

          <p>
            The graph on the dashboard visually represents the water quality
            readings collected by the sensor over time. Each data point on the
            graph corresponds to a specific time interval, and the vertical axis
            represents the measured parameter's value (e.g., pH level).
          </p>
        </div>

        {/* THIRD BOX */}
        <div className="mb-10">
          <h1 className="mb-1 font-bold text-sky-500">
            How can I view the specific reading at a certain time on the graph?
          </h1>

          <p>
            To view the precise reading at any given point on the graph, simply
            hover your mouse cursor over the corresponding data point. A tooltip
            will appear, displaying the exact measurement of the water quality
            parameter at that specific moment.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default FaqPage;
