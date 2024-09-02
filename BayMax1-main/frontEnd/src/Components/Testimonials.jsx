import React from "react";

// Testimonial card component
const TestimonialCard = ({ name, location, rating, image, text }) => {
  return (
    <div className="bg-gray-800 w-[400px] p-6 rounded-lg shadow-lg text-white">
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full mr-4 border-2 border-gray-500"
        />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-400">{location}</p>
        </div>
      </div>
      <p className="mb-4 text-gray-300">{text}</p>
      <div className="flex items-center">
        <span className="text-lg font-bold">{rating}</span>
        <span className="ml-2 text-yellow-400">★</span>
      </div>
    </div>
  );
};

// Main testimonials component
const Testimonials = () => {
  // Example data
  const testimonials = [
    {
      name: "Viezh Robert",
      location: "Warsaw, Poland",
      rating: 4.5,
      image: "/assets/test.png",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
    },
    {
      name: "Yessica Christy",
      location: "Shanxi, China",
      rating: 4.5,
      image: "/assets/test.png",
      text: "Lorem Ipsum is simply dummy text of the printing and"
    },
    {
      name: "Kim Young Jou",
      location: "Seoul, South Korea",
      rating: 4.5,
      image: "/assets/test.png",
    
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
  ];

  return (
    <div className="pt-10 pb-10 pl-10 pr-10  w-[100%] bg-black text-center">
      <h2 className="text-3xl font-bold text-white mb-4">
        Trusted by Thousands of Happy Customers
      </h2>
      <p className="text-gray-400 mb-8">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>
      <div className="flex gap-4 justify-center ">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
