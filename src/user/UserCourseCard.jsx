
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PaymentHandler from "./PaymentHandler";

// eslint-disable-next-line react/prop-types
const Card = ({ imagelink, title, rating, link, Id, price }) => {
  const [isPurchased, setIsPurchased] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkCoursePurchase = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.post(
            `${import.meta.env.VITE_API_URL}/users/check-course`,
            { courseId: Id },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setIsPurchased(response.data.courseExists);
        } else {
          console.log("Token not found in localStorage");
        }
      } catch (error) {
        console.error("Error checking course purchase:", error.response ? error.response.data : error.message);
      } finally {
        setLoading(false);
      }
    };

    if (Id) {
      checkCoursePurchase();
    } else {
      setLoading(false); // Handle case when Id is not set
    }
  }, [Id]);

  return (
    <div className="card max-w-xs sm:max-w-md md:max-w-sm lg:max-w-xs xl:max-w-xs bg-base-100 shadow-xl rounded-lg overflow-hidden">
      <figure className="overflow-hidden">
        <img
          src={imagelink}
          alt="courses"
          className="w-full h-56 object-cover"
        />
      </figure>

      <div className="card-body">
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
        <h1 className="font-bold">₹ {price}</h1>
        {!loading && (
          <div className="">
            {isPurchased ? (
              <Link
                to={link}
                className="bg-blue-500 px-6 py-3 rounded-md text-white text-lg w-64 text-center inline-block"
              >
                Start Learning
              </Link>
            ) : (
               
              <button onClick={PaymentHandler(Id,price)}className="bg-green-500 px-6 py-3 rounded-md text-white text-lg w-64 text-center inline-block">
                Buy Now
              </button>

            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
