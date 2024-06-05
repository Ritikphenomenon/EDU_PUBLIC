

import { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "../components/Carousel"
import Card from "../components/adminHomeCard"
import { useNavigate } from "react-router-dom";
import CourseForm from "./Create";

 const Ahome = () => {
  const [profileDetails, setProfileDetails] = useState("");
  const [courses, setCourses] = useState([]);

  const navigate=useNavigate();

  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem('token');
    
    // Navigate to the home page (you can replace '/' with the actual path to your home page)
    navigate('/');
  };

  

  useEffect(() => {
    const fetchProfileDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        if(token){
          const response = await axios.get(`${import.meta.env.VITE_API_URL}/admin/profile`,{
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }); 
          setProfileDetails(response.data);
          //console.log(response.data.username);
        }
        else {
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
          const response = await axios.get(`${import.meta.env.VITE_API_URL}/admin/courses`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }); 
          setCourses(response.data);
         // console.log(response.data);
        } else {
          console.log("Token not found in localStorage");
        }
      } catch (error) {
        console.error("Error fetching courses:", error.message);
      }
    };

    fetchCourses();
  }, []);



  return (
    <div>
     
        <div className="navbar bg-base-100">

    <div className="flex-1">
    <img src="../src/assets/logo.png" alt="Logo" className="w-16 h-auto " />
      <span className="text-lg font-bold">EDU</span>
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
<ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a href="/profile">Profile</a></li>

    <li><a onClick={()=>document.getElementById('my_modal_2').showModal()}>Create Course</a></li>
    <dialog id="my_modal_2" className="modal">
  <div className="modal-box w-auto">
     <CourseForm></CourseForm>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>

    <li>
      <a href="#" onClick={handleLogout} className=" hover:text-blue-700">
        Logout
      </a>
    </li>
  </ul>

</div>
      </ul>


    </div>

  </div>
  <Carousel/>
   {/* Render the list of courses */}
   <div >
        <div className="card-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 flex-wrap">
          {courses.map(course => (
            <Card
              key={course._id}
              id={course.Id}
              imagelink={course.imageLink}
              title={course.title}
              rating={course.rating}
              price={course.price}
              link={course.courselink}
             
            />
          ))}
        </div>
      </div>
  </div>
  );
  
};

export default Ahome;
