import React from 'react';
import joyStick from "/assets/joy_stick 1.svg";
import Navbar from "../Components/navbar";
import Achievement_Extras from "./Achievement_Extras";
import Footer from "../Components/Footer";
import GameEmbed from './GameEmbed';

export default function Home() {
  return (
    <div className='bg-[#39289F]'>
      <Navbar />
       {/* Breadcrumb and content */}
       <div className="bg-[#39289F] w-full flex items-center justify-center py-4">
        <div className="text-white text-sm mb-4">
          <span>Home</span> &gt; <span className="text-orange-500">Home</span>
        </div>
      </div>
      {/* Container for the game embed */}
      <div className="flex rounded-md justify-center items-center my-8">
        <div className="game-container bg-[#39289F] flex justify-center items-center" style={{ width: '60vw', aspectRatio: '4/3', margin: 'auto', borderRadius: '10px', padding: '20px' }}>
          <GameEmbed />
        </div>
      </div>
      
     

      {/* Main content section */}
      <section className="bg-[#39289F] h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left max-w-lg">
            <h3 className="text-[#F4A300] text-sm font-semibold mb-2">Proved By prodesigner</h3>
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Work that we <br /> produce for our <br /> clients
            </h1>
            <p className="text-[#C6C6C6] text-base mb-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
            </p>
            <button className="bg-[#F4A300] text-white py-3 px-8 rounded-full text-sm font-semibold shadow-lg hover:bg-[#d68900] transition duration-300">
              Get more details
            </button>
          </div>
          <div className="hidden md:block">
            <img src={joyStick} alt="Game Controller" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Additional content and footer */}
      <Achievement_Extras />
      <Footer />
    </div>
  );
}
