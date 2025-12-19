import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate("/dashboard");
    }
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/460621/pexels-photo-460621.jpeg?auto=compress&cs=tinysrgb&w=1600')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative max-w-5xl w-full mx-4 flex flex-col md:flex-row items-stretch rounded-3xl overflow-hidden">
        {/* Left: Glass login card */}
        <div className="md:w-1/2 flex items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-sm bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 text-white shadow-xl">
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center">
              Login to Your Account
            </h2>

            <form onSubmit={handleSubmit}>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mb-4 px-3 py-2 rounded-md bg-white/15 border border-white/30 text-sm placeholder:text-gray-200 focus:outline-none focus:ring-2 focus:ring-lime-300"
                onChange={(e) => setEmail(e.target.value)}
              />

              <label className="block text-sm mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full mb-4 px-3 py-2 rounded-md bg-white/15 border border-white/30 text-sm placeholder:text-gray-200 focus:outline-none focus:ring-2 focus:ring-lime-300"
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="flex items-center justify-between text-xs mb-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="accent-lime-300 bg-transparent"
                  />
                  <span>Remember me?</span>
                </label>
                <button
                  type="button"
                  className="text-gray-200 hover:text-white"
                >
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full py-2 rounded-full bg-lime-400 text-black text-sm font-semibold hover:bg-lime-300 transition"
              >
                LOGIN
              </button>
            </form>

            <p className="text-xs text-center mt-4">
              No account?{" "}
              <Link to="/signup" className="text-lime-300 hover:underline">
                Signup
              </Link>
            </p>
          </div>
        </div>

        {/* Right: Quote & social icons */}
        <div className="md:w-1/2 bg-transparent flex flex-col justify-center items-center text-white p-6 md:p-10 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug mb-4 max-w-md">
            THE GOAL OF LIFE IS
            <br />
            LIVING IN AGREEMENT
            <br />
            WITH NATURE.
          </h1>

          <div className="h-1 w-16 bg-white mb-4" />

          {/* Social buttons */}
          <div className="flex items-center gap-3 mt-4">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/your-page-slug"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="h-10 w-10 rounded-full border border-white/70 flex items-center justify-center
                         bg-white/10 hover:bg-[#1877F2] hover:border-transparent hover:text-white
                         transition"
            >
              <FaFacebookF size={16} />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/v_ijay01/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="h-10 w-10 rounded-full border border-white/70 flex items-center justify-center
                         bg-white/10 hover:bg-gradient-to-tr hover:from-pink-500 hover:to-yellow-400
                         hover:border-transparent hover:text-white transition"
            >
              <FaInstagram size={16} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/your-profile-id"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="h-10 w-10 rounded-full border border-white/70 flex items-center justify-center
                         bg-white/10 hover:bg-[#0A66C2] hover:border-transparent hover:text-white
                         transition"
            >
              <FaLinkedinIn size={16} />
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com/your_username"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="h-10 w-10 rounded-full border border-white/70 flex items-center justify-center
                         bg-white/10 hover:bg-[#1DA1F2] hover:border-transparent hover:text-white
                         transition"
            >
              <FaTwitter size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
