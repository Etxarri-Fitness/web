import type { NextPage } from "next";
import { Fragment } from "react";

import HomePage from "/components/layout/HomePage";
import Pricing from "/components/layout/Pricing";

const Home: NextPage = () => {
  return (
    <Fragment>
      <HomePage />
      <Pricing />
    </Fragment>
  );
};

export default Home;
