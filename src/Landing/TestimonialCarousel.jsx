
import Slider from 'react-slick';
import Testimonial from './Testimonial';
const testimonials = [
  {
    quote: "EduLearn has completely transformed the way I approach learning. The resources and support are unparalleled.",
    name: "Alice Johnson",
    title: "Student",
    image: "https://images.unsplash.com/photo-1523307730650-594bc63f9d67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbiUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    quote: "The platform's intuitive design and comprehensive tools have made a significant impact on my education.",
    name: "John Smith",
    title: "Educator",
    image: "https://plus.unsplash.com/premium_photo-1661866803933-17fc0cf78150?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbiUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    quote: "As a lifelong learner, EduLearn has provided me with the tools to continue growing and improving my skills.",
    name: "Maria Garcia",
    title: "Lifelong Learner",
    image: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg",
  },
  {
    quote: "EduLearn's innovative approach to education has made a lasting impact on my career and personal growth.",
    name: "Michael Brown",
    title: "Professional",
    image: "https://yt3.googleusercontent.com/ON3l845_EOEgz61I2LsLuvKrp9HpcoXAFh0w1g3Zv9EbTNZZNE3aqNQgBx4zZHQTLbygjSEV=s176-c-k-c0x00ffffff-no-rj",
  },
];


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const TestimonialCarousel = () => (
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-8">Testimonials</h2>
    <Slider {...settings}>
      {testimonials.map((testimonial, index) => (
        <Testimonial key={index} {...testimonial} />
      ))}
    </Slider>
  </div>
);

export default TestimonialCarousel;
