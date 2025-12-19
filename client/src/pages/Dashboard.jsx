import { Link } from "react-router-dom";

const StatCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
      <div className="text-3xl">{icon}</div>
      <p className="text-gray-500 mt-2">{title}</p>
      <h2 className="text-2xl font-bold mt-1">{value}</h2>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* STEP 2: Welcome Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              👋 Welcome back, Guys
            </h1>
            <p className="text-gray-600 mt-1">
              Plan trips, manage expenses, and travel stress-free ✈️
            </p>
          </div>

          <Link
            to="/create-trip"
            className="px-5 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            + Create Trip
          </Link>
        </div>

        {/* STEP 3: Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <StatCard title="Total Trips" value="3" icon="🧳" />
          <StatCard title="Upcoming Trips" value="1" icon="📅" />
          <StatCard title="Total Budget" value="₹65,000" icon="💰" />
        </div>

        {/* My Trips Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            My Trips
          </h2>
        </div>

        {/* Trips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold">Goa Trip</h3>
            <p className="text-sm text-gray-500 mt-1">
              👥 5 Members • 💰 ₹20,000
            </p>

            <Link
              to="/trip/1"
              className="text-blue-600 text-sm mt-3 inline-block font-medium hover:underline"
            >
              View Details →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
