import Card from "./HomeCard";


 const Popular = () => {
  const data = [
    {
      imagelink: "https://media.istockphoto.com/id/1509016910/photo/artificial-intelligence-ai-robot-finger-making-contact-with-human-hand.jpg?b=1&s=612x612&w=0&k=20&c=QnfURxtYES2omJ3-9-_0UD9aupUWt2Deehj4FjMHMTU=", // Machine Learning
      title: "Machine Learning",
      rating: 5,
      price: 4500
    },
    {
      imagelink: "https://images.pexels.com/photos/5380665/pexels-photo-5380665.jpeg?auto=compress&cs=tinysrgb&w=600", // Cyber Security
      title: "Cyber Security",
      rating: 4,
      price: 4000
    },
    {
      imagelink: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Mobile App Development
      title: "Mobile App Development",
      rating: 5,
      price: 5000
    },
    {
      imagelink: "https://images.pexels.com/photos/13175225/pexels-photo-13175225.jpeg?auto=compress&cs=tinysrgb&w=600", // Cloud Computing
      title: "Cloud Computing",
      rating: 4,
      price: 3200
    }
  ];
  
  return (
    <div >
        <div className="m-6">
            <h2 className="mb-2 w-[335px] h-[60px] font-poppins font-semibold text-[40px] leading-[60px] text-[#222222]">Top Courses</h2>
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
