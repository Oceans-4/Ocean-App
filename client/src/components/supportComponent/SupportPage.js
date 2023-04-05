const SupportPage = () => {
  return (
    <div className="flex flex-wrap justify-center py-8">
      <div className="w-5/12 max-md:w-11/12 border-blue-500 border mx-7">
        <h1 className="text-center text-4xl font-bold text-[#0B2447]">Donate</h1>
        <div className="flex flex-row">
          <h2></h2>
          <div>$25</div>
          <div>$50</div>
          <div>$75</div>
        </div>
        <div className="flex flex-wrap justify-between m-3 max-lg:flex-col">
          <label className="font-bold">First Name</label>
          <input className="border-blue-500 border" />
          <label className="font-bold">Last Name</label>
          <input className="border-blue-500 border" />
        </div>
        <div className="m-3">
          <label className="font-bold">Email</label>
          <input className="border-blue-500 border w-full" />
        </div>
        <div className="m-3">
          <label className="font-bold">Street Address</label>
          <input className="border-blue-500 border w-full" />
        </div>
        <div className="flex justify-center">
          <button className="bg-blue-500 text-white p-3 m-4 font-bold">Donate!</button>
        </div>
      </div>
      <div className="w-5/12 max-md:w-11/12 border-blue-500 border">
        <h1 className="text-center text-4xl font-bold text-[#0B2447]">Volunteer</h1>
        <p>Help out the cause! Learn in what ways you can go out and help the ocean with us!</p>
        <div className="flex justify-center">
          <button className="bg-blue-500 text-white p-3 m-4 font-bold">Volunteer!</button>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
