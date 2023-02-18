import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    console.log(formData);
    window.location.href = `mailto:andrew.lin@jastudio-tech.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}
    (${formData.email})`;
  };

  return (
    <div className="h-screen relative flex flex-col text-center  max-w-7xl px-10 justify-start mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl pl-4">
        Contact
      </h3>

      <div className="pt-36 md:pt-44 flex flex-col justify-start space-y-6">
        <h4 className="text-2xl font-semibold text-center decoration-[#C69400]/50 underline">
          Let&apos;s talk.
        </h4>

        <div className="space-y-5">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#C69400] h-7 w-7 animate-pulse" />
            <p>+61 413 916 081</p>
          </div>

          <div className="flex items-center space-x-3 justify-center">
            <EnvelopeIcon className="text-[#C69400] h-7 w-7 animate-pulse" />
            <p>andrew.lin@jastudio-tech.com</p>
          </div>
          {/* 
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#C69400] h-7 w-7 animate-pulse" />
            <p className="text-2xl">123 Developer Lane</p>
          </div> */}
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-full mx-auto"
        >
          <div className="w-full flex flex-col sm:flex-row sm:space-x-1 space-y-2 sm:space-y-0">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput sm:w-[40%] h-12 "
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput sm:w-[60%] h-12 "
              type="text"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput h-12"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput "
          />

          <button
            type="submit"
            className="bg-[#C69400] py-2 sm:py-5 px-10 rounded-md text-black font-bold text-lg "
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
