import Card from "../components/AdminCourseCard";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Footer from "../Landing/Footer";
 
const  CourseView = ()=> {
   const navigate= useNavigate();
   const location = useLocation();
   const {imagelink,title,rating,link,Id}=location.state || {}
   console.log(imagelink)
  const handleHome = () => {
    
    // Navigate to the home page (you can replace '/' with the actual path to your home page)
    navigate('/home');
  };
  return (
    < >
     <div className="navbar bg-base-100">

<div className="flex-1">
<img src="../src/assets/logo.png" alt="Logo" className="w-16 h-auto " />
  <span className=" ml-2  text-lg font-bold">EDU</span>
</div>
<button
        onClick={handleHome}
        className="mt-4 px-4 py-2 bg-gray-500 text-white rounded"
      >
        Home
      </button>
</div>

    <h2 className="h-32 w-full bg-blue-500 text-white flex justify-center items-center font-bold text-4xl">
  Live 0-100 Complete
</h2>

<h2 className="font-bold text-3xl mt-6 mb-6 ml-16 text-gray-800 relative">
  <span className="border-b-4 border-blue-500 pb-1 inline-block">Validity: 12 months</span>
</h2>



<div className="relative ">
    <div>
    <iframe
        width="760"
        height="415"
        src={`https://www.youtube.com/embed/dqlO6_5rZSQ`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="shadow-lg ml-16"
      ></iframe>
    </div>
  <div className="absolute top-1 right-16 transform -translate-y-1/2 p-4 mt-8  shadow-lg rounded-lg bg-white">
    <div className="flex justify-end items-end">
      <Card 
              imagelink={imagelink}
              title={title}
              rating={rating}
              link={link}
              Id={Id}
             
              />
    </div>
  </div>
</div>

<div className="min-h-screen bg-gradient-to-r from-green-50 to-blue-50 text-gray-800 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-6 text-center text-green-700">Master {title} with Emily Carter Live</h1>
        <p className="text-lg mb-8 text-center text-gray-600">Learn the fundamentals to advanced concepts of {title}, including hands-on projects and real-world applications.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-3xl font-semibold mb-4 text-green-600">Beginner to Intermediate Syllabus</h2>
            
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2 text-blue-600">Foundation</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Introduction to {title}</li>
                <li>Python for Data Science</li>
                <li>Data Preprocessing and Cleaning</li>
                <li>Exploratory Data Analysis</li>
                <li>Introduction to Statistics</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2 text-blue-600">Supervised Learning</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Linear Regression</li>
                <li>Logistic Regression</li>
                <li>Decision Trees and Random Forests</li>
                <li>Support Vector Machines</li>
                <li>Model Evaluation and Selection</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2 text-blue-600">Unsupervised Learning</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Clustering Algorithms (K-means, Hierarchical)</li>
                <li>Dimensionality Reduction (PCA, LDA)</li>
                <li>Anomaly Detection</li>
                <li>Association Rule Learning</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2 text-blue-600">Projects</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Building a Predictive Model for House Prices</li>
                <li>Customer Segmentation using Clustering</li>
              </ul>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-3xl font-semibold mb-4 text-green-600">Advanced Syllabus</h2>
            
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2 text-blue-600">Advanced {title}</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Ensemble Learning (Bagging, Boosting)</li>
                <li>Neural Networks and Deep Learning</li>
                <li>Convolutional Neural Networks (CNNs)</li>
                <li>Recurrent Neural Networks (RNNs)</li>
                <li>Natural Language Processing (NLP)</li>
                <li>Time Series Analysis and Forecasting</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2 text-blue-600">{title} in Production</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Model Deployment and Monitoring</li>
                <li>Scaling {title} Models</li>
                <li>Introduction to MLOps</li>
                <li>Using Docker for ML Models</li>
                <li>Cloud Platforms for ML (AWS, GCP, Azure)</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2 text-blue-600">Advanced Projects</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Image Classification with CNNs</li>
                <li>Sentiment Analysis with NLP</li>
                <li>Real-Time Stock Price Prediction</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
     
</>
  )
}

export default CourseView;
