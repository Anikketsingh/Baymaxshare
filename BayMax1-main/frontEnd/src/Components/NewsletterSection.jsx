import React from 'react';

const NewsletterSection = () => {
  return (
    <div className="flex flex-col items-center   justify-center  bg-[#39289F] text-white pt-10 pb-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold">Lorem Ipsum</h1>
        <p className="text-lg mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>
      <div className="bg-black text-white p-6 rounded-lg flex items-center justify-between w-[90%]">
        <div>
          <h2 className="text-xl font-bold">Stay in the loop</h2>
          <p className="text-sm mt-1">
            Subscribe to receive the latest news and updates about TDA. We promise not to spam you!
          </p>
        </div>
        <div className="flex items-center ml-4">
          <input
            type="email"
            placeholder="Enter email address"
            className="p-2 rounded-l-lg text-black outline-none"
          />
          <button className="bg-orange-500 text-white px-4 py-2 rounded-r-lg">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
