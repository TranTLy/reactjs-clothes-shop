import React from "react";
import "./homepage.scss";
import Directory from "../../components/directory/directory.component";
import { HomePageContainer } from "./homepage.style";

export const HomePage = () => {
  // throw  Error;
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
