/* eslint-disable @next/next/no-img-element */
//FORM DATA IMPORT
import { formdata } from "../data";
//REACT-HOOK-FORM-IMPORTS
import { useForm } from "react-hook-form";
//NEXT IMPORTS
import { useRouter } from "next/router";

const CreateEvent = ({
  setEvents,
  events,
  images,
  setImages,
  urls,
  setUrls,
}) => {
  //REACT HOOK FORM
  const { register, handleSubmit } = useForm();
  //NEXT ROUTER
  const router = useRouter();

  //function to set image state
  const handleImage = (e) => {
    setImages(e.target.file);
    //iterate and create a new url for each file
    const url = URL.createObjectURL(images);
    //set urls
    setUrls(url);
  };

  return (
    <main className="p-5 flex flex-col gap-y-5">
      <h1 className="font-medium text-[#240D57] text-3xl lg:text-5xl 2xl:text-6xl;">
        Create your event
      </h1>
      <section id="content-wrapper" className="w-full grid grid-cols-12 ">
        <div id="left" className="col-span-6 ">
          <div id="form-container" className="flex justify-center">
            <div id="form" className="h-full w-full ">
              <form
                className="flex flex-col gap-y-8 items-center"
                onSubmit={handleSubmit((data) => {
                  // data.id =
                  setEvents((events) => [data, ...events]);
                  console.log(events);
                  router.push("/event-list");
                })}
              >
                {formdata.map((item) => {
                  return (
                    <div
                      id="input-wrapper"
                      key={item.id}
                      className="flex flex-col gap-y-2 w-full"
                    >
                      <label className="text-md  text-[#240D57]">
                        {item.labelTitle}
                      </label>
                      <input
                        {...register(item.inputTitle, {
                          required: false,
                        })}
                        className="p-5 rounded-lg bg-green-100"
                        type={item.inputType}
                        placeholder={item.placeholder}
                        defaultValue={item.value}
                      ></input>
                    </div>
                  );
                })}
                <input
                  className="p-5 text-xl font-bold text-white w-1/2 rounded-lg bg-gradient-to-r from-primaryThree to-primaryFour  cursor-pointer"
                  type="submit"
                ></input>
              </form>
            </div>
          </div>
        </div>

        <div id="right" className="col-start-8 col-span-5 h-fit relative ">
          <div
            id="overlay"
            className="absolute z-20 h-full w-full flex justify-center items-center"
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
              className="py-3 px-5 sm:min-w-1/2 sm:h-1/4 rounded-xl text-sm text-white font-medium border border-white backdrop-blur-sm"
            />
          </div>

          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <img
            src={urls[0] ? urls[0] : "./birthday.png"}
            alt="suck-balls"
            className="rounded-xl object-contain"
          ></img>
        </div>
      </section>
    </main>
  );
};

export default CreateEvent;
