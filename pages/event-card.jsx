import { useState } from "react";
import Modal from "react-modal";
//modularise modal component
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon,
} from "next-share";

//STYLES FOR MODEL CONVERT TO TAILWIND?
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "50px 100px",
    border: "solid 1px purple",
  },
};

const Event = ({ events, activeEvent }) => {
  const [showSocial, setShowSocial] = useState(false);

  function openModal() {
    setShowSocial(true);
  }

  function closeModal() {
    setShowSocial(false);
  }

  return (
    <main
      id="event-container"
      className="grid grid-cols-12 py-10 px-5 bg-secondaryThree"
    >
      <Modal
        isOpen={showSocial}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Event Card"
      >
        <div id="modal-top" className="mb-10">
          <h1 className="small-title">
            Invite you friends to {events[activeEvent].Event}
          </h1>
        </div>
        <div id="modal-middle" className="mb-10 flex justify-between">
          <FacebookShareButton
            url={"http://localhost:3000/event-card"}
            quote={"You have been ENVITED!"}
            hashtag={"#my event by Envited"}
          >
            <FacebookIcon size={50} round />
          </FacebookShareButton>

          <TwitterShareButton
            url={"http://localhost:3000/event-card"}
            title={"You have been ENVITED!"}
          >
            <TwitterIcon size={50} round />
          </TwitterShareButton>

          <EmailShareButton
            url={"http://localhost:3000/event-card"}
            subject={"Envited event"}
            body="body"
          >
            <EmailIcon size={50} round />
          </EmailShareButton>
        </div>
        <div id="modal-bottom" className="w-full flex justify-center">
          <button
            onClick={closeModal}
            className="w-1/3 bg-purple-500 py-3 px-10 rounded-xl text-white font-bold"
          >
            close
          </button>
        </div>
      </Modal>

      <section
        id="left"
        className="col-span-6 flex flex-col justify-between items-end"
      >
        <div id="left-wrapper" className="w-[90%]  flex flex-col gap-y-6">
          <div id="titles">
            <h1 className="small-title mb-2">{events[activeEvent].Event}</h1>
            <h2 className="text-slate-500 font-medium">
              Hosted by {events[activeEvent].Creator}
            </h2>
          </div>
          <div id="buttonsOne" className="flex flex-col gap-y-3">
            <p className="p-5 bg-white rounded-xl">1 responses. See guests</p>
            <button className="p-3 w-full bg-alertOne text-alertTwo font-bold rounded-xl">
              Start 24h respond timer
            </button>
            <div id="double-button" className="w-full flex justify-between">
              <button
                onClick={() => openModal()}
                className="w-[45%] p-3 bg-primaryTwo text-white font-bold rounded-xl"
              >
                Invite
              </button>
              <button className="w-[45%] p-3  bg-white text-primaryTwo border border-primaryTwo font-bold rounded-xl">
                Text Guests
              </button>
            </div>
          </div>
          <div id="buttonTwo" className="flex flex-col gap-y-3">
            <div
              id="top"
              className="flex justify-between items-center p-3 border border-primaryThree rounded-xl"
            >
              <div id="left" className="flex flex-col">
                <p className="font-bold text-primaryOne">Event Start time</p>
                <p> {events[activeEvent].Start}</p>
              </div>
              <div id="right">
                <p>E</p>
              </div>
            </div>

            <div
              id="bottom"
              className="flex justify-between items-center p-3 border border-primaryThree rounded-xl"
            >
              <div id="left" className="flex flex-col">
                <p className="font-bold text-primaryOne">Location</p>
                <p>{events[activeEvent].Location}</p>
              </div>
              <div id="right">
                <p>E</p>
              </div>
            </div>
          </div>
          <div
            id="decription"
            className="flex justify-start p-3 border bg-white rounded-xl"
          >
            <div id="left" className="flex flex-col">
              <p className="font-bold text-primaryOne">Description</p>
              <p> {events[activeEvent].Description}</p>
            </div>
          </div>
        </div>
      </section>
      <section id="right" className="col-span-6 px-10 ">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/event.png"
          alt="image of party popper"
          className="rounded-2xl"
        ></img>
      </section>
    </main>
  );
};

export default Event;
