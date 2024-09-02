import React from 'react';
import ProfileComp from '../Components/ProfileComp';
import Testimonials from '../Components/Testimonials';
import NavbarComponent from '../Components/navbar';
import Footer from '../Components/Footer';
import NewsletterSection from '../Components/NewsletterSection';


export default function Stats() {
  return (
    <>
    <NavbarComponent/>
    <div className="bg-[#39289F] w-full m-auto  flex items-center justify-center">
      
        <div className="p-8 bg-blue-900 text-white text-center">
      <div className="text-white text-sm mb-4">
        <span>Home</span> &gt; <span className="text-orange-500">Team</span>
      </div>

      <div className="mb-8">
        <h1 className="text-2xl md:text-4xl font-bold mb-2">
          Lorem Ipsum is simply dummy text of the printing and.
        </h1>
        <p className="text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>

        <div className="bg-black p-6 rounded-lg flex justify-around items-center  text-white">
            <div className="flex m-4 items-center space-x-4">
                <img src="/assets/location.png" alt="Clients" className="h-12 w-12" />
                <div>
                    <h3 className="text-xl font-bold">90+</h3>
                    <p>Clients</p>
                </div>
            </div>
            <div className="h-12 w-[10px] bg-white "> </div>
            <div className="flex  items-center space-x-4">
                <img src="path/to/your/countries-image.png" alt="Countries" className="h-12 w-12" />
                <div> 
                    <h3 className="text-xl font-bold">30+</h3>
                    <p>Countries</p>
                </div>
            </div>
            <div className="h-12 border-l border-gray-500"></div>
            <div className="flex items-center space-x-4">
                <img src="path/to/your/projects-image.png" alt="Projects" className="h-12 w-12" />
                <div>
                    <h3 className="text-xl font-bold">50+</h3>
                    <p>Projects</p>
                </div>
            </div>
        </div>
        <ProfileComp/>
    </div>
    </div>
        <div className='w-[100%] bg-black'>

        <Testimonials/>
        </div>
        <div className='w-full'>
        <NewsletterSection/>

        </div>
    <Footer/>
    </>
  );
}
