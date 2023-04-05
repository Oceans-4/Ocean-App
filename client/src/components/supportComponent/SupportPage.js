import "./SupportPage.css";
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "FIRST_NAME":
  }
};

const SupportPage = () => {
  const [formState, dispatch] = useReducer(reducer, {
    name: { value: "" },
    email: { value: "" },
    streetAdress: { value: "" },
    isFormValid: false,
  });

  return (
    <div className="background-image mb-6">
      <div className="flex flex-wrap justify-center pt-10 pb-24">
        <div className="w-5/12 max-lg:w-9/12 max-sm:w-11/12 mx-7 pt-8 glass">
          <h1 className="text-center text-4xl font-bold text-[#0B2447]">Donation</h1>
          <section className="flex justify-center pt-4">
            <div className="flex">
              <div className="bg-[#78d0ee] text-white font-bold p-3 text-xl mx-2">$25</div>
              <div className="bg-blue-500 text-white font-bold p-3 text-xl mx-2">$50</div>
              <div className="bg-[#78d0ee] text-white font-bold p-3 text-xl mx-2">$75</div>
            </div>
          </section>
          <div className="flex flex-wrap justify-between m-8 pt-6 max-xl:flex-col max-xl:m-8">
            <label className="font-bold">First Name</label>
            <input type="text" name="firstName" className="border-blue-500 border" />
            <label className="font-bold">Last Name</label>
            <input type="text" name="lastName" className="border-blue-500 border" />
          </div>
          <div className="m-8 py-8">
            <label className="font-bold">Email</label>
            <input type="text" name="email" className="border-blue-500 border w-full" />
          </div>
          <div className="m-8 py-8">
            <label className="font-bold">Street Address</label>
            <input type="text" name="streetAddress" className="border-blue-500 border w-full" />
          </div>
          <div className="flex justify-center pt-16 pb-8">
            <button className="bg-blue-500 text-white text-3xl p-3 m-4 font-bold rounded-md">Donate!</button>
          </div>
        </div>
        {/* Volunteer Form */}
        <div className="w-5/12 max-lg:w-9/12 max-sm:w-11/12  mx-7 py-8 glass">
          <h1 className="text-center text-4xl font-bold text-[#0B2447]">Volunteer</h1>
          <p className="m-10 py-8 text-center text-black font-bold text-lg">
            Volunteering for ocean preservation is an essential step towards protecting our planet's marine life and maintaining a healthy ecosystem. By dedicating our time and energy to ocean conservation efforts, we can contribute to cleaning up the ocean and preventing further pollution. Volunteering opportunities can involve participating in beach cleanups, monitoring marine wildlife, and raising awareness about the importance of ocean preservation. As a volunteer, we can learn about the
            challenges that our oceans face and actively work towards creating a more sustainable future. Every effort, no matter how small, can make a difference in protecting our oceans and the creatures that call them home.
          </p>
          <div className="flex justify-center pt-8">
            <button className="bg-blue-500 text-white text-3xl p-3 m-4 font-bold rounded-md">Volunteer!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
