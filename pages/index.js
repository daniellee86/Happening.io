//NEXT IMPORTS
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Head>
        <title>HAPPENING</title>
        <meta name="description" content="happening events app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section
        id="section-one"
        className="bg-gradient-to-r from-white via-purple-200 to-purple-400 py-10 h-[93vh] flex items-center"
      >
        <div
          id="section-content-wrapper"
          className="flex flex-col-reverse gap-y-8 lg:grid lg:grid-cols-12 lg:gap-x-8 xl:gap-x-14 max-w-[90%] lg:w-[95%] mx-auto"
        >
          <div id="section-left" className=" flex justify-center lg:col-span-6">
            <div
              id="left-wrapper"
              className=" h-full w-3/4 lg:w-full flex flex-col justify-center gap-y-8 text-center lg:text-left pl-10"
            >
              <div id="left-title" className="flex flex-col gap-y-3">
                <h1 className=" title-text">Imagine if </h1>
                <h1 className="text-4xl lg:text-6xl 2xl:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-primaryThree">
                  All Social Media
                </h1>
                <h1 className=" title-text">had events.</h1>
              </div>
              <div id="left-sub-title">
                <h2 className="text-primaryTwo text-2xl 2xl:text-4xl">
                  Easily host and share events with your friends across any
                  social media.
                </h2>
              </div>
              <div id="cta">
                <button className="font-black text-white  bg-gradient-to-r from-primaryThree to-primaryFour  py-4 px-24 rounded-xl 2xl:text-3xl hover:scale-105 ease-in-out duration-500">
                  <Link href="/create-event">Create My Event</Link>
                </button>
              </div>
            </div>
          </div>
          <div
            id="section-right"
            className="lg:col-span-6 flex items-center justify-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/home-image.webp"
              alt="Image of an event card created with Envited"
              className="h-96 lg:h-full max-h-[75vh] object-contain shadow-2xl rounded-2xl shadow-slate-600"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
