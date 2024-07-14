


import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Card = ({imagelink,title,rating,price,id,link}) => {
  const navigate=useNavigate();

  //console.log(id);
  
  const view=()=>{
   // console.log(price)
    navigate('/usercourseview',{ state: { imagelink: imagelink, title: title,rating:rating,link:link,Id:id ,price:price} });
    
 }

  return (
    <div className="card max-w-xs sm:max-w-md md:max-w-sm lg:max-w-xs xl:max-w-xs bg-base-100 shadow-xl rounded-lg overflow-hidden ">

  <figure className="overflow-hidden" >
    <img src={imagelink} alt="courses" className="w-full h-56 object-cover" />

  </figure>

  <div className="card-body ">
    <h2 className="card-title">{title}</h2>
    <div className="flex-1 flex" >
      <div className="font-bold">
       {rating}
      </div>
      <div className="ml-3 rating flex">
  {(() => {
    const inputs = [];
    for (let i = 0; i < rating; i++) {
      inputs.push(<input key={i} type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />);
    }
    return inputs;
  })()}
</div>


    </div>
    <h1 className="font-bold">
₹  {price}
</h1>
    <div className="card-actions">
      
    <div className="flex justify-between">

    <button onClick={view} className="bg-blue-500 p-2 rounded-xl w-[240px] text-white">
    View Details
  </button>
    
    </div>


    </div>
  </div>
</div>
  )
}

export default Card;