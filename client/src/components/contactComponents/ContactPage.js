import { React, useState, useReducer } from 'react'
import "./ContactPage.css"

const reducer = (state, action) => {
  switch (action.type) {
    case "addName":
      return { ...state, name: action.payload };
    case "addEmail":
      return { ...state, email: action.payload };
    case "addMessage":
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

const ContactPage = () => {
  const [nameStyling, setNameStyling] = useState("rounded-lg py-2 w-full");
  const [emailStyling, setEmailStyling] = useState("rounded-lg py-2 w-full");
  const [messageStyling, setMessageStyling] = useState("rounded-lg py-2 w-full");

  const [formState, dispatch] = useReducer(reducer, {
    name: "",
    email: "",
    message: "",
  });

  const formHandler = () => {
    if (formState.name === "") {
      setNameStyling("rounded-lg py-2 w-full border border-red-500");
    } else {
      setNameStyling("rounded-lg py-2 w-full");
    }
    if (formState.email === "") {
      setEmailStyling("rounded-lg py-2 w-full border border-red-500");
    } else {
      setEmailStyling("rounded-lg py-2 w-full");
    }
    if (formState.message === "") {
      setMessageStyling("rounded-lg py-2 w-full border border-red-500");
    } else {
      setMessageStyling("rounded-lg py-2 w-full");
    }
  };

return (
    <div className="contact-image mb-6">
    <div className="flex flex-wrap justify-center pt-10 pb-24">
      <div className="w-5/12 max-lg:w-9/12 max-sm:w-11/12 mx-7 pt-8 mt-20  glass">
        <h1 className="text-center text-4xl font-bold text-[#0B2447]">Contact Us</h1>
        <section className="flex justify-center pt-4">
        </section>
        <div className="m-8 py-4">
          <label className="font-bold">Name</label>
          <input type="text" name="Name" value={formState.name} onChange={(event) => dispatch({ type: "addName", payload: event.target.value })} className={nameStyling} />
        </div>
        <div className="m-8 py-4">
          <label className="font-bold">Email</label>
          <input type="text" name="email" value={formState.email} onChange={(event) => dispatch({ type: "addEmail", payload: event.target.value })} className={emailStyling} />
        </div>
        <div className="m-8 py-4">
          <label className="font-bold">Message</label>
          <textarea name="message" value={formState.message} onChange={(event) => dispatch({ type: "addMessage", payload: event.target.value })} className={messageStyling} />
        </div>
        <div className="flex justify-center pt-16 pb-8">
          <button className="bg-blue-500 text-white text-3xl p-3 m-4 font-bold rounded-md" onClick={formHandler}>
            Submit!
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactPage