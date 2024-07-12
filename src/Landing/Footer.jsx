

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-3 mt-8">
      
      <div className="container mx-auto px-4 flex ">

        <div className="w-1/2">
          <div className="flex items-center mb-4">
            <img src="/src/assets/logo.png" alt="Edu Logo" className="h-6 w-8 mr-2" /> {/* Replace path_to_logo with the actual path */}
            <span className="text-2xl font-bold">EDU</span>
          </div>
          <p className="w-2/3">User will register themselves as students, than there all the available courses will visible, they can enroll in course.Teacher will register themselves as admin and create courses</p>
        </div>

        <div className="flex items-start w-1/2 justify-between ">

            <div className="">
           
            </div>

            <div className="">
          <h3 className="text-xl font-semibold mb-4">Contact me</h3>
          <ul>
            <li><a href="#" className="text-gray-400">ritikphenomenon@gmail.com</a></li>
            <li><a href="#" className="text-gray-400">+91 8092849968</a></li>
          </ul>
        </div>
          
        </div>
       
      </div>
      <div className="container mx-auto px-4 mt-10 text-center text-gray-500">
        <p>Build and developed by @Ritik Raj Pandey</p>
      </div>
    </footer>
  );
};

export default Footer;
