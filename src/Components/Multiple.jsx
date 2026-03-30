import React from "react";
import Section21 from "../Components/Section21";
import Gallery from "./Gallery";
import EventsandPrograms from "./EventsandPrograms";
import "../Styles/multiple.css";
import Header from "./Header";
import Realfoote2 from "./Realfooter2";
import Welcome from "./Welcome";

const Multiple = () => {
  return (
    <div className="background-container">
      {/* <div className="component-shadow">
        <Section21 />
      </div> */}
      {/* <div className="component-shadow">
        <Gallery />
      </div> */}
      <Header />
      <Welcome id="bridging-brushes123" />
      <div className="component-shadow">
        <EventsandPrograms />
      </div>
      <Realfoote2 />
    </div>
  );
};

export default Multiple;
