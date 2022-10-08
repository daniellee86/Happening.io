import React from "react";

const Event = (events, activeEvent) => {
  return (
    <main
      id="event-container"
      className="grid grid-cols-12 h-[100vh] py-10 px-5"
    >
      <section
        id="left"
        className="col-span-6 bg-red-500 flex flex-col justify-between items-end"
      >
        <div id="left-wrapper" className="w-[90%] bg-yellow-500">
          <div id="titles">
            <h1 className="font-bold text-2xl text-primaryOne">
              {/* {events[activeEvent].Event} */}
            </h1>
            <h2>Hosted by {events.Description}</h2>
          </div>
          <div id="buttonsOne">
            <p>1 responses. See guests</p>
            <button></button>
            <div id="double-button">
              <button></button>
              <button></button>
            </div>
          </div>
          <div id="buttonTwo">
            <div id="top">
              <div id="left"></div>
              <div id="right"></div>
            </div>
            <div id="bottom">
              <div id="left"></div>
              <div id="right"></div>
            </div>
          </div>
          <div id="description"></div>
        </div>
      </section>
      <section id="right" className="col-span-6 bg-green-500"></section>
    </main>
  );
};

export default Event;
