import { useState } from 'react';
import axios from 'axios';
import CourseForm from "../admin/Update";

// eslint-disable-next-line react/prop-types
const Card = ({ courseId, imageLink, title, rating, price, published, courseLink ,setCourses}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`${import.meta.env.VITE_API_URL}/admin/courses/${courseId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      // Update the courses state to remove the deleted course
      setCourses(prevCourses => prevCourses.filter(course => course.id !== courseId));
    } catch (error) {
      console.error('Error deleting course:', error.message);
    }
  };

  return (
    <div className="card max-w-xs sm:max-w-md md:max-w-sm lg:max-w-xs xl:max-w-xs bg-base-100 shadow-xl rounded-lg overflow-hidden">
      <figure className="overflow-hidden">
        <img src={imageLink} alt="courses" className="w-full h-56 object-cover" />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex-1 flex">
          <div className="font-bold">
            {rating}
          </div>
          <div className="ml-3 rating flex">
  {(() => {
    const inputs = [];
    for (let i = 0; i < rating; i++) {
      inputs.push(<input key={i} type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />);
    }
    return inputs;
  })()}
</div>

        </div>
        <h1 className="font-bold">
          ₹  {price}
        </h1>
        <div className="card-actions">
          <div className="flex justify-between">
            
            <button className="btn px-2 py-1 text-black flex items-center mr-3 pr-4" onClick={handleOpenModal}>
              <img src="../src/assets/update.png" alt="Icon" className="w-12 h-6 pr-4" />
              <span>Update</span>
            </button>
            <button className="btn px-2 py-1 pr-4 bg-black text-white flex items-center" onClick={handleDelete}>
              <img src="../src/assets/delete.png" alt="Icon" className="w-12 h-6 ml-2 pr-4" />
              <span>Delete</span>
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <dialog open className="modal">
          <div className="modal-box w-auto">
            <CourseForm
              courseId={courseId}
              imageLink={imageLink}
              title={title}
              rating={rating}
              published={published}
              price={price}
              courseLink={courseLink}
              onClose={handleCloseModal}
            />
          </div>
          <form method="dialog" className="modal-backdrop">
            <button onClick={handleCloseModal}>Close</button>
          </form>
        </dialog>
      )}
    </div>
  );
};

export default Card;
