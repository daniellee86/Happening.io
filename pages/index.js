//NEXT IMPORTS
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Envited</title>
        <meta name="description" content="Envited events app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section
        id="section-one"
        className="bg-gradient-to-r from-slate-300 via-slate-200 to-white py-10"
      >
        <div
          id="section-content-wrapper"
          className="flex flex-col-reverse gap-y-8 lg:grid lg:grid-cols-12 lg:gap-x-8 xl:gap-x-14 max-w-[90%] lg:w-[95%] mx-auto"
        >
          <div id="section-left" className=" flex justify-center lg:col-span-6">
            <div
              id="left-wrapper"
              className=" h-full w-3/4 lg:w-full flex flex-col justify-center gap-y-12 text-center lg:text-left"
            >
              <div id="left-title">
                <h1 className=" title-text">Imagine if </h1>
                <h1 className="title-text ">Twitter</h1>
                <h1 className=" title-text">had events.</h1>
              </div>
              <div id="left-sub-title">
                <h2 className="text-3xl 2xl:text-5xl">
                  Easily host and share events with your friends across any
                  social media.
                </h2>
              </div>
              <div id="cta">
                <button className="font-black text-white bg-purple-600 py-4 px-24 rounded-xl 2xl:text-3xl">
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
              layout="fill"
              src="/home-image.webp"
              alt="Image of an event card created with Envited"
              className="h-96 w-full lg:h-full lg:w-full max-h-[75vh] object-contain"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
