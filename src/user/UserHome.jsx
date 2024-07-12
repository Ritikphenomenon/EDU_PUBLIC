import { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import Footer from "../Landing/Footer";
import { FaSearch } from 'react-icons/fa';

const Ahome = () => {
  const [profileDetails, setProfileDetails] = useState(null);
  const [courses, setCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); 
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [nonFilteredCourses, setNonFilteredCourses] = useState([]);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  useEffect(() => {
    const fetchProfileDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/users/profile`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setProfileDetails(response.data);
          console.log(profileDetails);
        } else {
          console.log("Token not found in localStorage");
        }
      } catch (error) {
        console.error("Error fetching profile details:", error.message);
      }
    };

    fetchProfileDetails();
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/users/courses`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setCourses(response.data);
          setFilteredCourses(response.data);
        } else {
          console.log("Token not found in localStorage");
        }
      } catch (error) {
        console.error("Error fetching courses:", error.message);
      }
    };

    fetchCourses();
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const filtered = courses.filter(course =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const nonFiltered = courses.filter(course =>
      !course.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredCourses(filtered);
    setNonFilteredCourses(nonFiltered);
  }, [courses, searchQuery]);

  return (
    <div className="m-6 overflow-hidden">
      <div className="navbar bg-base-100">

        <div className="flex-1">
          <img
            src="../src/assets/logo.png"
            alt="Logo"
            className="w-16 h-auto "
          />
          <span className="text-lg font-bold">EDU</span>

        </div>

        <div className="flex items-center justify-end">


          <div className="relative">
            <input
              type="text"
              placeholder="Type here to search a course ......"
              value={searchQuery}
              onChange={handleSearch}
              className="p-2 ml-8 h-10 border-gray-400 border-2 w-[320px] rounded-2xl pr-10"
            />
            <button
              className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <FaSearch />
            </button>
          </div>
        </div>

        <div className="flex-none">
          <ul className="menu menu-horizontal px-2 mx-2">
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className="btn m-1">
                <div className="avatar">
                  <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    {profileDetails && profileDetails.profilePhoto && (
                      <img src={profileDetails.profilePhoto} alt="Profile" />
                    )}
                  </div>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a href="/userprofile">Profile</a>
                </li>

                <li>
                  <a
                    href="#"
                    onClick={handleLogout}
                    className=" hover:text-blue-700"
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>

      <Carousel />

      <div>
        <div className="card-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 flex-wrap">
          {filteredCourses.map(course => (
            <Card
              key={course._id}
              id={course._id}
              imagelink={course.imageLink}
              title={course.title}
              rating={course.rating}
              price={course.price}
              link={course.courselink}
            />
          ))}
          {nonFilteredCourses.map(course => (
            <Card
              key={course._id}
              id={course._id}
              imagelink={course.imageLink}
              title={course.title}
              rating={course.rating}
              price={course.price}
              link={course.courselink}
            />
          ))}
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Ahome;
