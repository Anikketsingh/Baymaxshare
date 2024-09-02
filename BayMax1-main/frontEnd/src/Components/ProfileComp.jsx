import React from "react";

const List = [
    "list 1",
    "list 2",
    "list 3",
    "list 4"
]

const ProfileComp = () => {
  return (
    <div className="  bg-blue-800">
      <div className="flex gap-10 items-center">
        <div className=" mt-10">
          <img src="/assets/profileImg.png" />
        </div>
        <div className="">
          <h1 className="text-3xl font-bold text-white mb-4">
            Lorem Ipsum is simply dummy text.
          </h1>
          <p className="text-gray-300 mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy.
          </p>
          <ul>
            {
              List.map((text, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <svg
                    className="w-4 h-4 text-green-500 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {text}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="flex gap-10 items-center">
        
        <div className="">
          <h1 className="text-3xl font-bold text-white mb-4">
            Lorem Ipsum is simply dummy text.
          </h1>
          <p className="text-gray-300 mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy.
          </p>
          <ul>
            {
              List.map((text, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <svg
                    className="w-4 h-4 text-green-500 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {text}
                </li>
              ))}
          </ul>
        </div>
        <div className=" mt-10">
          <img src="/assets/profileImg.png" />
        </div>
      </div>

      <div className="flex gap-10 items-center">
        <div className=" mt-10">
          <img src="/assets/profileImg.png" />
        </div>
        <div className="">
          <h1 className="text-3xl font-bold text-white mb-4">
            Lorem Ipsum is simply dummy text.
          </h1>
          <p className="text-gray-300 mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting.
          </p>
          <ul>
            {
              List.map((text, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <svg
                    className="w-4 h-4 text-green-500 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {text}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="flex gap-10 items-center">
        
        <div className="">
          <h1 className="text-3xl font-bold text-white mb-4">
            Lorem Ipsum is simply dummy text.
          </h1>
          <p className="text-gray-300 mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy.
          </p>
          <ul>
            {
              List.map((text, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <svg
                    className="w-4 h-4 text-green-500 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {text}
                </li>
              ))}
          </ul>
        </div>
        <div className=" mt-10">
          <img src="/assets/profileImg.png" />
        </div>
      </div>
      
    </div>
  );
};

export default ProfileComp;
