//NEXT IMPORTS
import { useRouter } from "next/router";

const EventList = ({ events, setActiveEvent, activeEvent }) => {
  //NEXT ROUTER
  const router = useRouter();

  const handleClick = (i) => {
    router.push("/event-card");
    setActiveEvent(i);
    console.log(events[activeEvent].Event);
  };

  return (
    <>
      <div className="flex flex-col items-center gap-y-5">
        <div id="title">
          <h1 className="mt-10 small-title">Your Events</h1>
        </div>

        <div id="sub-title">upcoming and past events</div>

        <div id="cards" className="w-1/3 ">
          <section id="events-container" className="flex flex-col gap-y-5">
            {events.map((event, i) => {
              return (
                <div
                  id="card-wrapper"
                  className="flex rounded-xl overflow-hidden shadow-xl cursor-pointer"
                  key={i}
                  onClick={() => handleClick(i)}
                >
                  <div className="w-1/2 p-5" id="image-wraper">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="event.png"
                      alt="card image"
                      className="rounded-xl"
                    ></img>
                  </div>
                  <div
                    className="w-1/2 flex flex-col justify-center items-center p-5"
                    id="copy-wrapper"
                  >
                    <div id="copy-row" className="flex">
                      <h2 className="font-bold text-2xl mb-5 text-[#240D57]">
                        {event.Event}
                      </h2>
                    </div>
                    <div id="copy-row" className="flex">
                      <h3 className="font-medium text-md">Start: </h3>
                      <p className="mb-4 text-sm">{event.Start}</p>
                    </div>
                    <div id="copy-row" className="flex">
                      <h3 className="font-medium text-md">End: </h3>
                      <p className="mb-4 text-sm">{event.End}</p>
                    </div>
                    <div id="copy-row" className="flex">
                      <h3 className="font-medium text-md">Location: </h3>
                      <p className="mb-4 text-sm">{event.Location}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </section>
        </div>
      </div>
    </>
  );
};

export default EventList;
