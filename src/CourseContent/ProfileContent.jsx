import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../Landing/Footer";
import { useNavigate } from "react-router-dom";
import Content from "./Content";
import { useLocation } from "react-router-dom";


const ProfileContent = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { title1 } = location.state || {};
  console.log(title1)


  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/users/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProfile(response.data);
      } catch (error) {
        console.error("Error fetching profile:", error.message);
        setError("Error fetching profile");
      }
    };

    fetchProfile();
  }, []);

  const handleHome = () => {
    navigate("/userhome");
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <img
            src="../src/assets/logo.png"
            alt="Logo"
            className="w-16 h-auto"
          />
          <span className="ml-2 text-lg font-bold">EDU</span>
        </div>
        <button
          onClick={handleHome}
          className="mt-4 px-4 py-2 bg-gray-500 text-white rounded"
        >
          Home
        </button>
      </div>

      <div className="flex">
        <div className="w-1/4 p-4 bg-gray-100 h-screen">
          <div className="text-center mb-8">
            {profile && ( // Check if profile is not null before accessing its properties
              <>
                <img
                  src={profile.profilePhoto}
                  alt="Profile"
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h2 className="text-2xl mb-2 font-semibold">{profile.username}</h2>
                <p className="text-gray-600 w-48 mx-auto text-left">{profile.bio}</p>
              </>
            )}
          </div>
        </div>

        <div className="w-3/4 p-4">
          <Content title={title1}/>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProfileContent;
