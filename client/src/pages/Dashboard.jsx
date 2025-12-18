import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Trips</h1>
        <Link
          to="/create-trip"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Create Trip
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold">Goa Trip</h2>
          <p className="text-sm text-gray-500">5 Members • ₹20,000</p>
          <Link
            to="/trip/1"
            className="text-blue-600 text-sm mt-2 inline-block"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
