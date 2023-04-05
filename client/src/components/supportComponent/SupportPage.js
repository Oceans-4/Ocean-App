const SupportPage = () => {
  return (
    <div className="flex flex-wrap justify-center py-8">
      <div className="w-5/12 max-lg:w-9/12 border-blue-500 border mx-7 pt-8">
        <h1 className="text-center text-4xl font-bold text-[#0B2447]">Donation</h1>
        <section className="flex justify-center pt-4">
          <div className="flex">
            <div className="bg-[#78d0ee] text-white font-bold p-3 text-xl mx-2">$25</div>
            <div className="bg-blue-500 text-white font-bold p-3 text-xl mx-2">$50</div>
            <div className="bg-[#78d0ee] text-white font-bold p-3 text-xl mx-2">$75</div>
          </div>
        </section>
        <div className="flex flex-wrap justify-between m-3 max-lg:flex-col py-8">
          <label className="font-bold">First Name</label>
          <input className="border-blue-500 border" />
          <label className="font-bold">Last Name</label>
          <input className="border-blue-500 border" />
        </div>
        <div className="m-3 py-8">
          <label className="font-bold">Email</label>
          <input className="border-blue-500 border w-full" />
        </div>
        <div className="m-3 py-8">
          <label className="font-bold">Street Address</label>
          <input className="border-blue-500 border w-full" />
        </div>
        <div className="flex justify-center pt-16 pb-8">
          <button className="bg-blue-500 text-white text-3xl p-3 m-4 font-bold rounded-md">Donate!</button>
        </div>
      </div>
      <div className="w-5/12 max-md:w-11/12 border-blue-500 border mx-7 py-8">
        <h1 className="text-center text-4xl font-bold text-[#0B2447]">Volunteer</h1>
        <p className="m-8 py-8 text-center">
          Volunteering for ocean preservation is an essential step towards protecting our planet's marine life and maintaining a healthy ecosystem. By dedicating our time and energy to ocean conservation efforts, we can contribute to cleaning up the ocean and preventing further pollution. Volunteering opportunities can involve participating in beach cleanups, monitoring marine wildlife, and raising awareness about the importance of ocean preservation. As a volunteer, we can learn about the
          challenges that our oceans face and actively work towards creating a more sustainable future. Every effort, no matter how small, can make a difference in protecting our oceans and the creatures that call them home.
        </p>
        <div className="flex justify-center pt-8">
          <button className="bg-blue-500 text-white text-3xl p-3 m-4 font-bold rounded-md">Volunteer!</button>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
