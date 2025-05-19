import React from "react";
import testimonial1 from "../../assets/testimonials/testimonialOne.jpg";
import testimonial2 from "../../assets/testimonials/testimonialSecond.jpg";

const PageSection = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="rounded-xl section-one flex flex-col-reverse items-center gap-4">
        <div className=" w-3/4 testimonial flex flex-col text-left gap-4">
          <p>
            <em>
              "Our hospital uses these cards to ensure staff safety in radiology
              departments. The Bluetooth alerts are game-changing."
            </em>
          </p>
          <p>
            <strong>
              <em>– Martha Torres, Hospital Safety Officer</em>
            </strong>
          </p>
        </div>
        <div className="img-container flex justify-center">
          <img className="w-3/4" src={testimonial1} alt="A person." />
        </div>
      </div>
      <div className="rounded-xl section-two flex flex-col-reverse items-center gap-4">
        <div className="testimonial w-3/4 flex flex-col text-left gap-4">
          <p>
            <em>
              "As a frequent flyer, I was shocked to see how much cosmic
              radiation I absorbed annually. The RadiaSafe Card helped me
              optimize my flight schedules."
            </em>
          </p>
          <p>
            <strong>
              <em> – Dr. Sarah Lin, Environmental Scientist</em>
            </strong>
          </p>
        </div>
        <div className="img-container">
          <img className="w-3/4 m-auto" src={testimonial2} alt="A person." />
        </div>
      </div>
      <div className="rounded-xl section-one flex flex-col-reverse items-center gap-4">
        <div className=" w-3/4 testimonial flex flex-col text-left gap-4">
          <p>
            <em>
              "Our hospital uses these cards to ensure staff safety in radiology
              departments. The Bluetooth alerts are game-changing."
            </em>
          </p>
          <p>
            <strong>
              <em>– Martha Torres, Hospital Safety Officer</em>
            </strong>
          </p>
        </div>
        <div className="img-container flex justify-center">
          <img className="w-3/4" src={testimonial1} alt="A person." />
        </div>
      </div>
    </div>
  );
};

export default PageSection;
