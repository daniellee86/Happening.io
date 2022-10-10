//GLOBAL CSS IMPORT
import "../styles/globals.css";
//REACT IMPORTS
import { useState } from "react";

//COMPONENT IMPORTS
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  //'global' state for created events - array of event objects
  const [events, setEvents] = useState([]);
  const [activeEvent, setActiveEvent] = useState(0);
  const [images, setImages] = useState("");
  const [urls, setUrls] = useState({});

  return (
    <>
      <Navbar />

      <Component
        events={events}
        setEvents={setEvents}
        activeEvent={activeEvent}
        setActiveEvent={setActiveEvent}
        images={images}
        setImages={setImages}
        urls={urls}
        setUrls={setUrls}
        {...pageProps}
      />
    </>
  );
}

export default MyApp;
