import React from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import homeIntroImg from "assets/img/home-intro.png";

function Home(props) {
  return (
    <React.Fragment>
      <Header />
      <div className="">
        <img src={homeIntroImg} alt="home intro" />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Home;
