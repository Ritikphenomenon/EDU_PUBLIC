
import React, { useState } from 'react';
import axios from 'axios';

const AdminProfileForm = ({ profile, onUpdate }) => {
  const [name1, setName] = useState(profile.name);
  const [bio1, setBio] = useState(profile.bio);
  const [image1, setImage] = useState(profile.profilePhoto);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleUpdateProfile = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/admin/profileupdate`,
        { name: name1, bio: bio1, profilePhoto: image1 },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      console.log('Profile updated successfully:', response.data);
      // Optionally update the profile state if necessary
      profile.name = name1;
      profile.bio = bio1;
      profile.profilePhoto = image1;

      // Call the onUpdate callback to re-fetch the profile data
      if (onUpdate) {
        onUpdate();
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      setError('Failed to update profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-auto rounded-lg border border-gray-300 bg-gray-100 m-2 p-4">
      <div className="flex justify-between items-end">
        <div>
          <div className="w-full font-poppins font-bold text-base leading-7.5 text-gray-700">
            My Information
          </div>
          <div className="w-full font-poppins font-medium text-sm leading-6 text-gray-600">
            Updating your information will offer you the most relevant content and conversations.
          </div>
        </div>
        <div>
          <button
            onClick={handleUpdateProfile}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? 'Updating...' : 'Update Profile'}
          </button>
        </div>
      </div>

      <div className="flex mt-3 space-x-4">
        <div>
          <img src={image1} className="w-[90px] h-[90px] rounded-full bg-white" alt="Profile" />
        </div>
        <div className="flex flex-col space-y-2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-900">Name</label>
            <input
              type="text"
              id="name"
              value={name1}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-2 block w-[600px] border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Bio</label>
            <textarea
              id="bio"
              value={bio1}
              onChange={(e) => setBio(e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">Profile Photo URL</label>
            <input
              type="text"
              id="image"
              value={image1}
              onChange={(e) => setImage(e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
      </div>
      {error && <div className="mt-4 text-red-500">{error}</div>}
    </div>
  );
};

export default AdminProfileForm;
