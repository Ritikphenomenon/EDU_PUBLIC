

const Testimonial = ({ quote, name, title, image }) => (
  <div className="">
    <img src="/src/assets/comma.png" className="h-12" alt="" />
    <p className="text-xl italic text-gray-600 text-center">{quote}</p>
    <div className="mt-4 ml-32 flex justify-center items-start ">
      <div className="mr-4">
      <img className="w-10 h-10 rounded-full  " src={image} alt={name} />
      </div>
      <div>
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-gray-500 ">{title}</p>
     <img src="/src/assets/comma.png" className="ml-96 h-12" alt="" />
      </div>
      
     
    </div>
   
  </div>
);

export default Testimonial;
