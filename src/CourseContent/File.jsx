

const File = ({ name, imageUrl, videoUrl }) => {
  return (
    <div 
      className="flex items-center p-2 mt-2 cursor-pointer hover:bg-gray-100" 
      onClick={() => window.open(videoUrl, '_blank')}
    >
      <img src={imageUrl} alt={`${name} thumbnail`} className="w-12 h-12 mr-2 rounded" />
      <span>{name}</span>
    </div>
  );
};

export default File;
