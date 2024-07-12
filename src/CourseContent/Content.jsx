import React from 'react';
import Folder from './Folder';
import File from './File';

const Content = ({ title }) => {
  // Example data structure
  const folders = [
    {
      name: "Introduction",
      files: [
        { name: 'Warmup Session', imageUrl: '/src/assets/video.jpg', videoUrl: 'https://www.youtube.com/watch?v=CxGSnA-RTsA' },
        { name: 'Week 0 Orientation class', imageUrl: '/src/assets/video.jpg', videoUrl: 'https://www.youtube.com/watch?v=CxGSnA-RTsA' },
        { name: 'Neovim Setup', imageUrl: '/src/assets/video.jpg', videoUrl: 'https://www.youtube.com/watch?v=CxGSnA-RTsA' }
      ]
    },
    {
      name: "Git & GitHub",
      files: [
        { name: 'Git Basics', imageUrl: '/src/assets/video.jpg', videoUrl: 'https://www.youtube.com/watch?v=CxGSnA-RTsA' },
        { name: 'Branching and Merging', imageUrl: '/src/assets/video.jpg', videoUrl: 'https://www.youtube.com/watch?v=CxGSnA-RTsA' },
        { name: 'GitHub Workflow', imageUrl: '/src/assets/video.jpg', videoUrl: 'https://www.youtube.com/watch?v=CxGSnA-RTsA' }
      ]
    },
    {
      name: "Web Development",
      files: [
        { name: 'HTML Basics', imageUrl: '/src/assets/video.jpg', videoUrl: 'https://www.youtube.com/watch?v=CxGSnA-RTsA' },
        { name: 'CSS Flexbox', imageUrl: '/src/assets/video.jpg', videoUrl: 'https://www.youtube.com/watch?v=CxGSnA-RTsA' },
        { name: 'JavaScript Essentials', imageUrl: '/src/assets/video.jpg', videoUrl: 'https://www.youtube.com/watch?v=CxGSnA-RTsA' },
        { name: 'Responsive Design', imageUrl: '/src/assets/video.jpg', videoUrl: 'https://www.youtube.com/watch?v=CxGSnA-RTsA' }
      ]
    },
    {
      name: "DevOps",
      files: [
        { name: 'Introduction to DevOps', imageUrl: '/src/assets/video.jpg', videoUrl: 'https://www.youtube.com/watch?v=CxGSnA-RTsA' },
        { name: 'CI/CD Pipelines', imageUrl: '/src/assets/video.jpg', videoUrl: 'https://www.youtube.com/watch?v=CxGSnA-RTsA' },
        { name: 'Docker Basics', imageUrl: '/src/assets/video.jpg', videoUrl: 'https://www.youtube.com/watch?v=CxGSnA-RTsA' }
      ]
    },
    {
      name: "Data Structures & Algorithms",
      files: [
        { name: 'Array Manipulations', imageUrl: '/src/assets/video.jpg', videoUrl: 'https://www.youtube.com/watch?v=CxGSnA-RTsA' },
        { name: 'Sorting Algorithms', imageUrl: '/src/assets/video.jpg', videoUrl: 'https://www.youtube.com/watch?v=CxGSnA-RTsA' },
        { name: 'Binary Search Trees', imageUrl: '/src/assets/video.jpg', videoUrl: 'https://www.youtube.com/watch?v=CxGSnA-RTsA' }
      ]
    },
    {
      name: "Machine Learning",
      files: [
        { name: 'Introduction to ML', imageUrl: '/src/assets/video.jpg', videoUrl: 'https://www.youtube.com/watch?v=CxGSnA-RTsA' },
        { name: 'Supervised Learning', imageUrl: '/src/assets/video.jpg', videoUrl: 'https://www.youtube.com/watch?v=CxGSnA-RTsA' },
        { name: 'Unsupervised Learning', imageUrl: '/src/assets/video.jpg', videoUrl: 'https://www.youtube.com/watch?v=CxGSnA-RTsA' }
      ]
    },
    {
      name: "Cybersecurity",
      files: [
        { name: 'Basics of Cybersecurity', imageUrl: '/src/assets/video.jpg', videoUrl: 'https://www.youtube.com/watch?v=CxGSnA-RTsA' },
        { name: 'Network Security', imageUrl: '/src/assets/video.jpg', videoUrl: 'https://www.youtube.com/watch?v=CxGSnA-RTsA' },
        { name: 'Cryptography', imageUrl: '/src/assets/video.jpg', videoUrl: 'https://www.youtube.com/watch?v=CxGSnA-RTsA' }
      ]
    },
    {
      name: "Cloud Computing",
      files: [
        { name: 'Introduction to Cloud', imageUrl: '/src/assets/video.jpg', videoUrl: 'https://www.youtube.com/watch?v=CxGSnA-RTsA' },
        { name: 'AWS Basics', imageUrl: '/src/assets/video.jpg', videoUrl: 'https://www.youtube.com/watch?v=CxGSnA-RTsA' },
        { name: 'Azure Fundamentals', imageUrl: '/src/assets/video.jpg', videoUrl: 'https://www.youtube.com/watch?v=CxGSnA-RTsA' }
      ]
    },
    {
      name: "Database Management",
      files: [
        { name: 'SQL Basics', imageUrl: '/src/assets/video.jpg', videoUrl: 'https://www.youtube.com/watch?v=CxGSnA-RTsA' },
        { name: 'NoSQL Databases', imageUrl: '/src/assets/video.jpg', videoUrl: 'https://www.youtube.com/watch?v=CxGSnA-RTsA' },
        { name: 'Database Design', imageUrl: '/src/assets/video.jpg', videoUrl: 'https://www.youtube.com/watch?v=CxGSnA-RTsA' }
      ]
    },
    {
      name: "Programming Languages",
      files: [
        { name: 'Python Basics', imageUrl: '/src/assets/video.jpg', videoUrl: 'https://www.youtube.com/watch?v=CxGSnA-RTsA' },
        { name: 'Java Fundamentals', imageUrl: '/src/assets/video.jpg', videoUrl: 'https://www.youtube.com/watch?v=CxGSnA-RTsA' },
        { name: 'C++ Advanced Topics', imageUrl: '/src/assets/video.jpg', videoUrl: 'https://www.youtube.com/watch?v=CxGSnA-RTsA' }
      ]
    }
  ];

  return (
    <div className="p-4">
      <h1 className='h-full font-poppins font-bold text-2xl leading-9 text-gray-700 ml-2 mb-8'>
      Live {title} Cohort 1 (Finished)
      </h1>
      {folders.map((folder, index) => (
        <Folder key={index} name={folder.name}>
          {folder.files.map((file, fileIndex) => (
            <File key={`${index}-${fileIndex}`} name={file.name} imageUrl={file.imageUrl} videoUrl={file.videoUrl} />
          ))}
        </Folder>
      ))}
    </div>
  );
};

export default Content;
