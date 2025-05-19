import React from "react";
import Main from "../../constants/Main";
import { AboutGrid, Contact, Content, Image } from "../../constants/AboutGrid";

const About = () => {
  return (
    <>
      <Main className="bg-white text-gray-900">
        <AboutGrid className="flex-1">
          <Content>somecontent</Content>
          <Image>img</Image>
          <Contact>
            <form action="">
              <label htmlFor="ip">label</label>
              <input type="email" id="ip" />
            </form>
          </Contact>
        </AboutGrid>
      </Main>
    </>
  );
};

export default About;
