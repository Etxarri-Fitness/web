import type { NextPage } from "next";
import { Fragment } from "react";

import HomePage from "components/layout/HomePage";
import Pricing from "components/layout/Pricing";
import AboutMe from "components/layout/AboutMe";

const Home: NextPage = () => {
  return (
    <Fragment>
      <HomePage />
      <Pricing />
      <AboutMe />
    </Fragment>
  );
};

export default Home;
