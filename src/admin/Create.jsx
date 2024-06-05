import  { useState } from 'react';
import axios from 'axios';


const CourseForm = () => {
  // State to manage form fields
  
  const [formData, setFormData] = useState({
    title: '',
    rating: '',
    price: '',
    imageLink: '',
    published: false,
    courselink: ''
  });

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Retrieve token from localStorage
      const token = localStorage.getItem('token');

      // Send POST request to backend with token
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/admin/courses`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      // Handle success
      console.log('Course created successfully:', response.data);
      // Optionally, you can redirect or display a success message
      window.location.reload();

    } catch (error) {
      // Handle error
      console.error('Error creating course:', error.message);
      // Optionally, you can display an error message to the user
    }
  };

  // Function to handle form field changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: val
    });
  };

  return (
    <div className="max-w-md mx-auto  bg-white  rounded-md">
      <h2 className="text-xl font-semibold mb-4 text-center">Add New Course</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
            <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating</label>
            <input type="number" id="rating" name="rating" value={formData.rating} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
            <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
          </div>
        </div>
        <div>
          <div className="mb-4">
            <label htmlFor="imageLink" className="block text-sm font-medium text-gray-700">Image Link</label>
            <input type="text" id="imageLink" name="imageLink" value={formData.imageLink} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
            <br />
            
          </div>
          <div className="mb-4">
            <label htmlFor="published" className="block text-sm font-medium text-gray-700">
              Published
              </label>
            
              <input type="checkbox" id="published" name="published" checked={formData.published} onChange={handleChange} className="mt-2 h-6 w-6" />
              
         
          </div>
        
          <div className="mb-4 mt-5">
            <label htmlFor="courselink" className="block text-sm font-medium text-gray-700">Course Link</label>
            <input type="text" id="courselink" name="courselink" value={formData.courselink} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
          </div>
        </div>
        <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 col-span-2">Submit</button>
      </form>
    </div>
  );
};

export default CourseForm;
