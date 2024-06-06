// src/components/Profile.js
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./UserCourseCard";
import { useNavigate } from "react-router-dom";
import ChangePassword from "../layout/UserChangePassword";


const UserProfile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState("");
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProfile = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/users/profile`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setProfile(data);
    } catch (error) {
      console.error("Error fetching profile:", error.message);
      setError("Error fetching profile");
    }
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/users/purchased-courses`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setCourses(Array.isArray(data) ? data : []);
        //console.log(data)
      } catch (error) {
        console.error("Error fetching courses:", error.message);
        setError("Error fetching courses");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
    fetchCourses();
  }, [courses]);

  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem("token");

    // Navigate to the home page (you can replace '/' with the actual path to your home page)
    navigate("/");
  };

  const handleHome = () => {
    // Navigate to the home page (you can replace '/' with the actual path to your home page)
    navigate("/userhome");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

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
            className="w-16 h-auto "
          />
          <span className=" ml-2  text-lg font-bold">EDU</span>
        </div>
        <button
          onClick={handleHome}
          className="mt-4 px-4 py-2 bg-gray-500 text-white rounded"
        >
          Home
        </button>
      </div>

      <div className="flex">
        <div className="w-1/4 p-4 bg-gray-100 ">
          <div className="text-center mb-8">
            <img
              src={profile.profilePhoto}
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h2 className="text-2xl font-semibold">{profile.name}</h2>
            <p className="text-gray-600">{profile.bio}</p>

            <div className="flex items-center justify-center mt-2">
              <img
                src="src/assets/logout.png"
                className="w-6 h-6 mr-2"
                alt="icon"
              />
              <span
                onClick={handleLogout}
                className="px-4 py-2  underline cursor-pointer text-xl "
              >
                Logout
              </span>
            </div>

            <div className="flex items-center justify-center ">
              <img
                src="src/assets/setting.png"
                className="w-6 h-6 mr-2"
                alt="icon"
              />
              <span
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
                className="px-4 py-2  underline cursor-pointer text-xl "
              >
                Setting
              </span>
              <dialog id="my_modal_2" className="modal">
                <div className="modal-box ">
                  <ChangePassword></ChangePassword>
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </div>
          </div>
        </div>

        <div className="w-3/4 p-4">
          <div className="text-center py-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Courses Purchased By
            </h2>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900">
                {profile.name}
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {courses.length > 0 ? (
              courses.map((course) => (
                <Card
                key={course._id}
                imagelink={course.imageLink}
                title={course.title}
                rating={course.rating}
                link={course.courselink}
                Id={course._id}
                price={course.price}
                />
              ))
            ) : (
              <div className="flex items-center justify-center h-screen">
                <p className="text-4xl font-bold text-gray-700 flex-shrink-0 ml-40">
                  No Courses Available
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
