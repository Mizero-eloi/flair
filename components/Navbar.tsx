import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap p-6 w-90p sticky top-0 z-20 bg-white">
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-gray-300 border-gray-300 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow w-[80%] d-flex justify-between">
          <Link legacyBehavior href="/">
            <a className="block mt-4 lg:inline-block lg:mt-0 font-semibold px-2 text-base text-gray-800 mr-4 border-b-4 border-white hover:border-gray-800">
              Home
            </a>
          </Link>
          <Link legacyBehavior href="/about">
            <a className="block mt-4 lg:inline-block lg:mt-0 font-semibold px-2 text-base text-gray-800 mr-4 border-b-4 border-white hover:border-gray-800">
              About us
            </a>
          </Link>
          <Link legacyBehavior href="/explore">
            <a className="block mt-4 lg:inline-block lg:mt-0 font-semibold px-2 text-base text-gray-800 mr-4 border-b-4 border-white hover:border-gray-800">
              Explore
            </a>
          </Link>
          <Link legacyBehavior href="/artists">
            <a className="block mt-4 lg:inline-block lg:mt-0 font-semibold px-2 text-base text-gray-800 mr-4 border-b-4 border-white hover:border-gray-800">
              Artists
            </a>
          </Link>
          <Link legacyBehavior href="/profile">
            <a className="block mt-4 lg:inline-block lg:mt-0 font-semibold px-2 text-base text-gray-800 mr-4 border-b-4 border-white hover:border-gray-800">
              Profile
            </a>
          </Link>
        </div>
        <div className="w-[20%]">
          <button className="text-gray-800 font-bold py-1 px-4 rounded border border-gray-800 mr-2 hover:bg-gray-800 hover:text-white">
            Login
          </button>
          <button className="bg-gray-800 text-white font-bold py-1 px-4 rounded border-gray-800 hover:text-gray-800 hover:bg-white">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
