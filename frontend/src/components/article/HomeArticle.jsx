import React from "react";
import radiation from "../../assets/radiation.jpg";
import radiation2 from "../../assets/radiation2.jpg";

const HomeArticle = () => {
  return (
    <>
      <div className="flex flex-col gap-16">
        <div className="flex flex-col-reverse lg:flex-row-reverse justify-between gap-8">
          <div className="container flex flex-col gap-8 justify-center text-left flex-1">
            <h2 className="text-2xl font-bold">
              Redefining Radiation Safety for the Modern World
            </h2>
            <p className="">
              In an era where environmental awareness is non-negotiable, the
              <span className="font-bold"> RadiaSafe Detection Card </span>{" "}
              emerges as a breakthrough in personal safety technology. This
              unassuming device – no thicker than a credit card – empowers
              individuals and professionals alike to monitor invisible threats
              with unprecedented ease and precision.
            </p>
          </div>
          <div className="flex-1 container">
            <img src={radiation} alt="Radiation image." />
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row justify-between gap-8">
          <div className="container flex flex-col justify-center gap-8 text-left flex-1">
            <h2 className="text-2xl font-bold">
              Why Radiation Monitoring Matters
            </h2>
            <div className="">
              Radiation exposure isn’t limited to nuclear facilities or medical
              labs.
              <p className="pt-4 pb-4">
                <span className="font-bold">Everyday sources like:</span>
              </p>
              <ul className="list-disc pl-4">
                <li>Air travel (cosmic radiation at high altitudes)</li>
                <li>Medical imaging (X-rays, CT scans)</li>
                <li>Building materials (granite countertops, concrete)</li>
                <li>Consumer electronics</li>
              </ul>
              <p>...can accumulate over time.</p>
              <p>
                The RadiaSafe Card puts{" "}
                <span className="font-bold">real-time data</span> in your hands,
                helping you make informed decisions about your environment.
              </p>
            </div>
          </div>
          <div className="flex-1 container">
            <img src={radiation2} alt="Radiation image." />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeArticle;
