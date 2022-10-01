import { React, Fragment } from "react";
import Features from "./components/Features/Features";
import Header from "./components/Header/Header";
import BestSeller from "./components/BestSeller/BestSeller";
import Reference from "./components/Reference/Reference";
import Care from "./components/Care/Care";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <Fragment>
      <Header />
      <Features />
      <BestSeller />
      <Reference />
      <Care />
      <Footer />
    </Fragment>
  );
};

export default App;
