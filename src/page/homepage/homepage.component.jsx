import React from "react";
import "./homepage.scss";
import Directory from "../../components/directory/directory.component";
import { HomePageContainer } from "./homepage.style";

export const HomePage = () => {
  return new Error("This is error to test Error boundary");
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
