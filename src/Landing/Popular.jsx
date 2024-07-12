import Card from "./HomeCard";


 const Popular = () => {
  
  const data = [
    {
      imagelink: "https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Web Development
      title: "Web Development",
      rating: 5,
      price: 3500
    },
    {
      imagelink: "https://images.pexels.com/photos/3747266/pexels-photo-3747266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Graphic Design
      title: "Graphic Design",
      rating: 4,
      price: 4000
    },
    {
      imagelink: "https://images.pexels.com/photos/5952738/pexels-photo-5952738.jpeg?auto=compress&cs=tinysrgb&w=600", // Data Science
      title: "Data Science",
      rating: 5,
      price: 5000
    },
    {
      imagelink: "https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=600", // Digital Marketing
      title: "Digital Marketing",
      rating: 4,
      price: 3200
    }
  ];

  
  return (
    <div >
        <div className="m-6">
            <h2 className="mb-2 w-[335px] h-[60px] font-poppins font-semibold text-[40px] leading-[60px] text-[#222222]">Popular Courses</h2>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
      {data.map((item) => (
        <Card
          key={item.id}
          imagelink={item.imagelink}
          title={item.title}
          rating={item.rating}
          price={item.price}
        />
      ))}
    </div>

        </div>
    </div>
  )
}

export default Popular;
