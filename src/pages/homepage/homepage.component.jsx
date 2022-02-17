import React from "react";

import DirectoryMenu from "../../components/directory/directory.component";
import './homepage.style.scss'
import { HomeContainer } from "./homepgae.styles";

const HomePage = () => {
  return (
    <HomeContainer>
      <DirectoryMenu />
    </HomeContainer>
  );
};

export default HomePage;
