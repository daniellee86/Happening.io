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
}) => {
  //REACT HOOK FORM
  const { register, handleSubmit } = useForm();
  //NEXT ROUTER
  const router = useRouter();

  return (
    <main className=" relative p-5 flex justify-center items-center h-[93vh] overflow-hidden">
         <img
            src="./party.jpg"
            alt="background"
            className="absolute left-0 top-0 object-cover w-full  -z-20"
          ></img>

    
      <section id="content-wrapper" className="w-full grid grid-cols-12 ">
        <div id="left" className="col-span-12 ">
        <h1 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-primaryThree text-center text-3xl lg:text-5xl 2xl:text-6xl ;">
        Create your event
      </h1>
          <div id="form-container" className="flex justify-center mt-10">
            <div id="form" className="h-full w-full ">
              <form
                className="flex flex-wrap gap-y-8 gap-5 items-center  justify-center"
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
                      className="flex flex-col  w-[45%]"
                    >
                      <label className="text-2xl font-bold backdrop-blur-lg w-fit p-3 mb-2 rounded-xl  text-white">
                        {item.labelTitle}
                      </label>
                      <input
                        {...register(item.inputTitle, {
                          required: false,
                        })}
                        className="p-7 rounded-lg bg-green-100"
                        type={item.inputType}
                        placeholder={item.placeholder}
                        defaultValue={item.value}
                      ></input>
                    </div>
                  );
                })}
                <input
                  className="p-5 mt-10 text-2xl font-bold text-white w-1/3 rounded-lg bg-gradient-to-r from-primaryThree to-primaryFour  cursor-pointer"
                  type="submit"
                ></input>
              </form>
            </div>
          </div>
        </div>

   
      </section>
    </main>
  );
};

export default CreateEvent;
