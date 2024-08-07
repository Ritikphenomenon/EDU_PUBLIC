
import { useNavigate } from "react-router-dom"
// eslint-disable-next-line react/prop-types
const Card = ({imagelink,title,rating,price,link,id}) => {
  const navigate =useNavigate();
    const view=()=>{
       navigate('/courseview',{ state: { imagelink: imagelink, title: title,rating:rating,link:link,Id:id } });
    }
    return (
      
      <div className="card  bg-base-100 shadow-xl rounded-lg overflow-hidden ">
  
    <figure className="overflow-hidden" >
      <img src={imagelink} alt="courses" className=" h-56 object-cover w-full p-1 rounded-lg" />
  
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
  <button onClick={view} className="bg-blue-500 p-2 rounded-3xl  text-white">
    View Details
  </button>
      
    </div>
  </div>
    )
  }
  
  export default Card;