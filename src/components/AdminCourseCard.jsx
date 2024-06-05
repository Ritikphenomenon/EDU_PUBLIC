import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// eslint-disable-next-line react/prop-types
const Card = ({ imagelink, title, rating, link, Id }) => {
  const [username, setusername] = useState("");

  useEffect(() => {
    const fetchProfileDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/admin/profile`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setusername(response.data.username);
          //console.log(response.data.username);
        } else {
          console.log("Token not found in localStorage");
        }
      } catch (error) {
        console.error("Error fetching profile details:", error.message);
      }
    };

    fetchProfileDetails();
  }, []);

  return (
    <div className="card max-w-xs sm:max-w-md md:max-w-sm lg:max-w-xs xl:max-w-xs bg-base-100 shadow-xl rounded-lg overflow-hidden ">
      <figure className="overflow-hidden">
        <img
          src={imagelink}
          alt="courses"
          className="w-full h-56 object-cover"
        />
      </figure>

      <div className="card-body ">
        <h2 className="card-title">{title}</h2>
        <div className="flex-1 flex">
          <div className="font-bold">{rating}</div>
          <div className="ml-3 rating flex">
            {(() => {
              const inputs = [];
              for (let i = 0; i < rating; i++) {
                inputs.push(
                  <input
                    key={i}
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                );
              }
              return inputs;
            })()}
          </div>
        </div>
        {Id === username ? (
          <div className="">
            <Link
              to={link}
              className="bg-blue-500 px-6 py-3 rounded-md text-white text-lg w-64 text-center inline-block "
            >
              Start Learning
            </Link>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Card;
