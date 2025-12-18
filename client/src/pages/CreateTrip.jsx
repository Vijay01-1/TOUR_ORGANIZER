const CreateTrip = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form className="bg-white p-6 rounded shadow w-96">
        <h2 className="text-xl font-bold mb-4">Create Trip</h2>

        <input
          type="text"
          placeholder="Trip Name"
          className="w-full mb-3 p-2 border rounded"
        />

        <input
          type="number"
          placeholder="Budget"
          className="w-full mb-3 p-2 border rounded"
        />

        <button className="w-full bg-blue-600 text-white p-2 rounded">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateTrip;
