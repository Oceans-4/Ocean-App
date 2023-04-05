const SupportPage = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="w-1/2 border-blue-500 border">
        <h1 className="text-center">Donate</h1>
        <div className="flex flex-row">
          <h2></h2>
          <div>$25</div>
          <div>$50</div>
          <div>$75</div>
        </div>
        <div className="flex justify-between">
          <label>First Name</label>
          <input className="border-blue-500 border" />
          <label>Last Name</label>
          <input className="border-blue-500 border" />
        </div>
        <label>Email</label>
        <input className="border-blue-500 border w-full" />
        <label>Street Address</label>
        <input className="border-blue-500 border w-full" />
        <div className="flex justify-center">
          <button>Donate!</button>
        </div>
      </div>
      <div className="w-1/2 border-blue-500 border">
        <h1>Volunteer</h1>
        <p>Help out the cause! Learn in what ways you can go out and help the ocean with us!</p>
        <div className="flex justify-center">
          <button>Volunteer!</button>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
