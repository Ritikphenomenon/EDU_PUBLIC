

import Signup from "../admin/signup";
import UserLogin from "../user/UserLogin";
import UserSignup from '../user/UserSignup'

import Carousel from "../components/Carousel"

 const Home = () => {
  return (
    <div>
        <div className="navbar bg-base-100">

    <div className="flex-1">
    <img src="../src/assets/logo.png" alt="Logo" className="w-16 h-auto " />
      <span className="text-lg font-bold">EDU</span>
    </div>

    <div className="flex-none">
      <ul className="menu menu-horizontal px-2 mx-2">
      <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>Become a teacher?</button>
      <dialog id="my_modal_1" className="modal">
  <div className="modal-box w-auto">
    <Signup />
   
    </div>
    <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
  
</dialog>


      <button className="btn btn-neutral" onClick={() => document.getElementById('my_modal_2').showModal()}>Login</button>
<dialog id="my_modal_2" className="modal">
  <div className="modal-box w-auto">
    <UserLogin />
   
    </div>
    <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
  
</dialog>

      

      <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>Sign Up</button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box w-auto">
        <UserSignup/>
        </div>
        <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
      </dialog>


      </ul>
    </div>
  </div>
  <Carousel/>
  </div>
  )
}

export default Home;
