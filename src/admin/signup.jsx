import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Login';

const Signup = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        name: '',
        profilePhoto: '',
        bio: ''
    });
   
    const [showSignup, setShowSignup] = useState(true);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/admin/signup`, formData);
            toast.success(response.data.message || 'Signup successful');
            // Assuming signup was successful, reset form and move to login
            setStep(1);
            setFormData({
                username: '',
                password: '',
                name: '',
                profilePhoto: '',
                bio: ''
            });
          
            setShowSignup(false);
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'An error occurred. Please try again later.';
           
            toast.error(errorMessage);
        }
    };

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const handleLoginClick = () => {
        setShowSignup(false); // Change the condition to render the Login component
    };

    return (
        <div className="max-w-md mx-auto">
            <ToastContainer />
            {showSignup ? (
                <div className="bg-white rounded">
                    
                    <h2 className="text-xl font-bold mb-6">Register to Continue</h2>
                    <h2 className="font-semibold text-gray-500">
                        Make changes to your account here as a Teacher. Click Signup when you are done.
                    </h2>
                    {step === 1 && (
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Step 1: Personal Information</h2>
                            <div className="mb-4">
                                <label htmlFor="name" className="block mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full border px-4 py-2 rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="bio" className="block mb-1">Bio</label>
                                <textarea
                                    id="bio"
                                    name="bio"
                                    value={formData.bio}
                                    onChange={handleChange}
                                    className="w-full border px-4 py-2 rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="profilePhoto" className="block mb-1">Profile Photo Link</label>
                                <input
                                    type="text"
                                    id="profilePhoto"
                                    name="profilePhoto"
                                    value={formData.profilePhoto}
                                    onChange={handleChange}
                                    className="w-full border px-4 py-2 rounded"
                                />
                            </div>
                            <div className="flex">
                                <button onClick={nextStep} className="bg-blue-500 text-white px-4 py-2 rounded">
                                    Next &rarr;
                                </button>
                            </div>
                            <div>
                                <p className="mt-4 text-gray-600">
                                    Already have an account?{" "}
                                    <button
                                        type="button"
                                        onClick={handleLoginClick}
                                        className="text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                                    >
                                        Login
                                    </button>
                                </p>
                            </div>
                        </div>
                    )}
                    {step === 2 && (
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Step 2: Account Information</h2>
                            <div className="mb-4">
                                <label htmlFor="username" className="block mb-1">Username (Email)</label>
                                <input
                                    type="email"
                                    id="username"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    className="w-full border px-4 py-2 rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block mb-1">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full border px-4 py-2 rounded"
                                />
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="#" className="text-blue-500 hover:underline" onClick={prevStep}>
                                    &larr; Back
                                </a>
                                <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <Login />
            )}
        </div>
    );
};

export default Signup;
