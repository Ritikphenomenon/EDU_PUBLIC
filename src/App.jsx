
import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Login from './admin/Login';
import Signup from './admin/signup';
import Ahome from './admin/Home';
import Profile from './admin/Profile';
import UserHome from './user/UserHome';
import UserProfile from './user/UserProfile';
import CourseView from './layout/CourseView';
import ChangePassword from './layout/ChangePassword';
import UserCourseView from './user/UserCourseView';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ProfileContent from './CourseContent/ProfileContent';


function App() {
 
  return (
    <>
  <Router>
      <Routes>
      <Route  path="/"  element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route  path="/home"  element={<Ahome/>} />
        <Route  path="/profile"  element={<Profile/>} />
        <Route  path="/userhome"  element={<UserHome/>} />
        <Route  path="/userprofile"  element={<UserProfile/>} />
        <Route  path="/courseview"  element={<CourseView/>} />
        <Route  path="/changepassword"  element={<ChangePassword/>} />
        <Route  path="/usercourseview"  element={<UserCourseView/>} />
        <Route  path="/course-content"  element={<ProfileContent/>} />
      </Routes>
    </Router>
    <ToastContainer />
    </>
  )
}

export default App
