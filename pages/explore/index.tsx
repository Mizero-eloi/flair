import { Footer, Navbar, Header } from '@/components';
import React from 'react';
import Wrapper from './../../components/ExploreWrapper';
import { AiOutlineSearch } from 'react-icons/ai';
import Link from 'next/link';
import { FaHeart, FaBookmark, FaStar } from 'react-icons/fa';

const ExploreSection = () => {
  return (
    <div
      className="h-[40vh] bg-contain relative flex items-center p-[5%] margin-b-10 rounded"
      style={{
        backgroundImage:
          "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMqoqHa6WPDNrjcuRlmGBE7kIEnFOhE0MH4TxX76QJlA&s')",
      }}
    >
      {/* Left side */}
      <div className="w-[60%]">
        <h1 className="text-4xl font-bold text-white">Explore</h1>
        <p className="text-white mt-4 w-[85%]">
          Helping artists around the world and show casing their works our
          speciality. With Flair, discover more new creative art works in
          Rwanda.
        </p>
        <div className="relative mt-4">
          <span className="absolute top-1/2 transform -translate-y-1/2 left-6">
            <AiOutlineSearch size={20} className="text-gray-800" />
          </span>
          <input
            type="text"
            className="bg-white rounded-md py-3 px-3 pl-20 pr-20 focus:outline-none w-full"
            placeholder="Search by name, artist or category"
          />
          <button className="absolute right-0 top-0 bottom-0 h-full bg-black text-white px-10 border-4 border-white py-2 rounded-lg hover:bg-gray-700">
            Search
          </button>
        </div>
      </div>

      {/* Right side */}
      <div className="w-35%">
        <div
          className="h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMqoqHa6WPDNrjcuRlmGBE7kIEnFOhE0MH4TxX76QJlA&s')",
          }}
        />
      </div>
    </div>
  );
};


const ArtCard = () => {
  return (
      <div className="w-[22%] h-[45vh] my-4 relative shadow-lg rounded-md">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMqoqHa6WPDNrjcuRlmGBE7kIEnFOhE0MH4TxX76QJlA&s" className="w-full h-[75%] rounded-t-md" alt="Artwork" />
        <div className="absolute top-2 right-2 w-10 h-10 bg-white rounded-full flex justify-center items-center">
          <FaHeart />
        </div>
        <div className="flex items-center justify-between mt-2 px-2">
          <h2 className="text-gray-700 font-medium">Title of Artwork</h2>
          <FaBookmark />
        </div>
        <div className="flex items-center px-2">
          <FaStar className="text-yellow-500 mr-1" />
          <FaStar className="text-yellow-500 mr-1" />
          <FaStar className="text-yellow-500 mr-1" />
          <FaStar className="text-gray-400 mr-1" />
          <FaStar className="text-gray-400" />
        </div>
      </div>
  );
};

const Navigation = () => {
  return (
    <div className="w-[65%] flex justify-evenly mx-auto my-8">
      <Link legacyBehavior href="/">
        <a className="text-gray-700 font-medium border-b-2 border-b-white px-4 hover:border-black">
          ALL
        </a>
      </Link>
      <Link legacyBehavior href="/paintings">
        <a className="text-gray-700 font-medium border-b-2 border-b-white px-4 hover:border-black">
          PAINTINGS
        </a>
      </Link>
      <Link legacyBehavior href="/drawings">
        <a className="text-gray-700 font-medium border-b-2 border-b-white px-4 hover:border-black">
          DRAWINGS
        </a>
      </Link>
      <Link legacyBehavior href="/sculptures">
        <a className="text-gray-700 font-medium border-b-2 border-b-white px-4 hover:border-black">
          SCULPTURES
        </a>
      </Link>
      <Link legacyBehavior href="/artists">
        <a className="text-gray-700 font-medium border-b-2 border-b-white px-4 hover:border-black">
          ARTISTS
        </a>
      </Link>
    </div>
  );
};

const ExplorePage = () => {
  return (
    <div className="explore">
      <Wrapper>
        <Header />
        <Navbar />

        {/* intro section */}
        <ExploreSection />

        {/* navigation section */}
        <Navigation />

        {/* artcards */}
        <div className="artcards w-full flex flex-wrap justify-between">
          <ArtCard/>
          <ArtCard/>
          <ArtCard/>
          <ArtCard/>
          <ArtCard/>
          <ArtCard/>
          <ArtCard/>
          <ArtCard/>
          <ArtCard/>
          <ArtCard/>
          <ArtCard/>
          <ArtCard/>
        </div>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default ExplorePage;
