import React from "react";
import card from "../../assets/card.png";
import Button from "../../components/buttons/Button";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row justify-between gap-8">
        <div className="container flex flex-col justify-center text-left gap-8 w-full">
          <h1 className="text-3xl font-bold">
            Next-Gen Radiation Protection Fits in Your Wallet
          </h1>
          <p>
            Stay protected 24/7 with our revolutionary radiation detection card
            — thinner than a smartphone, smarter than traditional detectors.
            Features Bluetooth connectivity, 6-month battery life, and
            AI-powered threat analysis. Trusted by nuclear engineers, medical
            teams, and safety-first households worldwide.
          </p>
          <div className="btnContainer">
            <Button type="submit" name="Explore More"></Button>
          </div>
        </div>
        <div className="container">
          <img src={card} alt="Hero image." />
        </div>
      </div>
    </>
  );
};

export default Hero;
