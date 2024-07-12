import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../user/UserCourseCard";
import { useNavigate } from "react-router-dom";
import ChangePassword from "../layout/UserChangePassword";
import UserProfileForm from "./UserProfileForm";
import Footer from "../Landing/Footer"

const Profile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProfile = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/users/profile`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setProfile(data);
    } catch (error) {
      console.error("Error fetching profile:", error.message);
      setError("Error fetching profile");
    }
  };

  

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
    } catch (error) {
      console.error("Error fetching courses:", error.message);
      setError("Error fetching courses");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
    fetchCourses();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleHome = () => {
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
        <div className="w-1/4 p-4 bg-gray-100 h-screen ">
          <div className="text-center mb-8">
            <img
              src={profile.profilePhoto}
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h2 className="text-2xl mb-2  font-semibold">{profile.username}</h2>
            {console.log(profile.username)}
            <p className="text-gray-600 w-48 mx-auto text-left">
              {profile.bio}
            </p>

            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center justify-center mt-2">
                  <img
                    src="src/assets/logout.png"
                    className="w-6 h-6 mr-2"
                    alt="icon"
                  />
                  <span
                    onClick={handleLogout}
                    className="px-4 py-2 underline cursor-pointer text-xl"
                  >
                    Logout
                  </span>
                </div>

                <div className="flex items-center justify-center mt-2">
                  <img
                    src="src/assets/setting.png"
                    className="w-6 h-6 mr-2"
                    alt="icon"
                  />
                  <span
                    onClick={() =>
                      document.getElementById("my_modal_2").showModal()
                    }
                    className="px-4 py-2 underline cursor-pointer text-xl"
                  >
                    Setting
                  </span>
                  <dialog id="my_modal_2" className="modal">
                    <div className="modal-box">
                      <ChangePassword></ChangePassword>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                      <button>close</button>
                    </form>
                  </dialog>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-3/4 p-4">
          <div className="">
            <div className=" h-9 font-poppins font-bold text-2xl leading-9 text-gray-700 ml-2">
              Hello {profile.name}👋!
            </div>
          
            <div>
              <UserProfileForm profile={profile} onUpdate={fetchProfile} />
            </div>
          </div>

          <div className=" h-9 font-poppins font-bold text-2xl leading-9 text-gray-700 ml-2 mb-7">
      Purchased  course
    </div>

          {courses.length > 0 ? (
            
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              
              {courses.map((course) => (
                <Card
                key={course._id}
                imagelink={course.imageLink}
                title={course.title}
                rating={course.rating}
                link={course.courselink}
                Id={course._id}
                price={course.price}

                />
              ))}
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="flex flex-col items-center">
                <img
                  className="w-64 h-64"
                  src="/src/assets/No.png"
                  alt="No content"
                />
                <h2 className="text-2xl font-semibold mt-4">Empty....</h2>
              </div>

            </div>
          )}
        </div>
        
      </div>
      <Footer></Footer>
    </>
  );
};

export default Profile;
