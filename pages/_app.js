//GLOBAL CSS IMPORT
import "../styles/globals.css";
//REACT IMPORTS
import { useState } from "react";

//COMPONENT IMPORTS
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  //'global' state for created events - array of event objects
  const [events, setEvents] = useState([]);

  return (
    <>
      <Navbar />

      <Component events={events} setEvents={setEvents} {...pageProps} />
    </>
  );
}

export default MyApp;
