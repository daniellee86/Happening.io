const EventList = ({ events }) => {
  return (
    <>
      <div className="">
        <h1 className="font-medium text-[#240D57] text-2xl lg:text-4xl 2xl:text-5xl;">
          Your Events
        </h1>
        <section
          id="events-container"
          className="grid grid-flow-col auto-cols-max"
        >
          {events.map((event, i) => {
            return (
              <div
                id="item-container"
                className="px-28 py-8 m-5 flex flex-col justify-between bg-slate-500 rounded-xl"
                key={i}
              >
                <h2 className="font-bold text-2xl mb-5 text-[#240D57]">
                  {event.Event}
                </h2>
                <h3 className="font-medium text-lg">Start time</h3>
                <p className="mb-4">{event.Start}</p>
                <h3 className="font-medium text-lg">End time</h3>
                <p className="mb-4">{event.End}</p>
                <h3 className="font-medium text-lg">Location</h3>
                <p className="mb-4">{event.Location}</p>
                <h3 className="font-medium text-lg">URL</h3>
                <p className="mb-4">{event.URL}</p>
                <h3 className="font-medium text-lg">Description</h3>
                <p className="mb-4">{event.Description}</p>
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default EventList;
