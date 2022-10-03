//FORM DATA IMPORT
import { formdata } from "../data";
//REACT-HOOK-FORM-IMPORTS
import { useForm } from "react-hook-form";
//NEXT IMPORTS
import { useRouter } from "next/router";

const CreateEvent = ({ setEvents, events }) => {
  //REACT HOOK FORM
  const { register, handleSubmit } = useForm();
  //NEXT ROUTER
  const router = useRouter();
  return (
    <main className="flex flex-col justify-between">
      <h1 className="title-text">Create your event</h1>
      <section id="form-container" className="p-10 flex justify-center ">
        <div id="form" className="h-full w-1/2 ">
          <form
            className="flex flex-col gap-y-8"
            onSubmit={handleSubmit((data) => {
              setEvents((events) => [data, ...events]);
              console.log(events);
              router.push({
                pathname: "/event-list",
              });
            })}
          >
            {formdata.map((item) => {
              return (
                <div
                  id="input-wrapper"
                  key={item.id}
                  className="flex flex-col gap-y-2"
                >
                  <label className="text-md text-gray-400">
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
              className="p-5 rounded-lg bg-green-100 cursor-pointer"
              type="submit"
            ></input>
          </form>
        </div>
      </section>
    </main>
  );
};

export default CreateEvent;
