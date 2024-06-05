// ChangePassword.jsx

import { useState } from "react";
import axios from "axios";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [username, setusername] = useState("");

  const handleChangePassword = async (e) => {
    e.preventDefault();

    try {
      // console.log(username);
      // console.log(currentPassword);
      // console.log(newPassword);
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/admin/changepassword`,
        {
          username,
          currentPassword,
          newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      // console.log(username);
      // console.log(currentPassword);
      // console.log(newPassword);
      setMessage(res.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-4">Change Password</h2>
      <form onSubmit={handleChangePassword}>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Current Password
          </label>
          <input
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            New Password
          </label>
          <input
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full px-3 py-2 bg-blue-500 text-white rounded-lg"
        >
          Change Password
        </button>
      </form>
      {message && <p className="mt-4 text-red-500">{message}</p>}
    </div>
  );
};

export default ChangePassword;
