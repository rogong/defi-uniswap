import React, {  } from "react";

//INTERNAL IMPORT
import { Bgdrawn, HeroSection } from "../Components/index";

const Home = () => {
  return (
    <div>
        <Bgdrawn />
      <HeroSection accounts="hey" tokenData="DATA" />
      <Bgdrawn />
    </div>
  );
};

export default Home;
