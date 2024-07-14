import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import Signup from "./UserSignup";

const UserLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [condition, setCondition] = useState(true); // State to manage the condition

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/users/login`, {
        username,
        password,
      });
      const token = response.data.token;
      localStorage.setItem("token", token);
      toast.success(response.data.message || "Logged in successfully");
      navigate("/userhome");
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Error logging in. Please try again.";
      toast.error(errorMessage);
    }
  };

  const handleRegisterClick = () => {
    setCondition(false); // Change the condition to render the signup component
  };

  return (
    <div>
      <ToastContainer />
      {condition ? ( // Conditional rendering based on the condition
        <form className="bg-white rounded-lg max-w-xs w-full">
          <h2 className="text-xl font-bold mb-6">Login to Continue</h2>
          <p className="font-semibold text-gray-400">
            Make changes to your account here As Student. Click Login when you are done.
          </p>
          <br />
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              className="form-input mt-1 block w-full rounded border border-gray-900 h-7"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="form-input mt-1 block w-full rounded border border-gray-900 h-7"
            />
          </div>
          <button
            type="button"
            onClick={handleLogin}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center justify-center w-full"
          >
            Login Now
          </button>
          <p className="mt-4 text-gray-600">
            Not registered yet?{" "}
            <button
              type="button"
              onClick={handleRegisterClick}
              className="text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Register
            </button>
          </p>
        </form>
      ) : (
        <Signup />
      )}
    </div>
  );
};

export default UserLogin;
