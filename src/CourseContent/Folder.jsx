import React, { useState } from 'react';

const Folder = ({ name, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="my-2">
      <div 
        className="flex items-center p-2 bg-gray-200 rounded cursor-pointer h-[60px]" 
        onClick={handleClick}
      >
        <img
          src={isOpen ? '/src/assets/folders.png' : '/src/assets/folders.png'}
          alt="folder-icon"
          className="w-10 h-10 mr-2"
        />
        <span>{name}</span>
      </div>
      {isOpen && <div className="pl-4">{children}</div>}
    </div>
  );
};

export default Folder;
