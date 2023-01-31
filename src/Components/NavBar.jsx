import React from "react";
import { Link } from "react-router-dom";
import logo from '../logo.png';

const NavBar = () => {

  return (

    <nav className="bg-neutral-800 fixed top-0 z-50 w-screen">
      {/* default navbar css */}
      <div className="sm:hidden sm:px-6 lg:px-8 w-screen " id="defaultCss">
        <div className="relative flex h-auto items-center justify-between">

          <div className="flex flex-col flex-1 items-center justify-center pt-1">
            <div className="flex flex-shrink-0 items-start">
              <img className="h-10 w-auto" src={logo} alt="Dailink News" />
            </div>
            <div className="text-[7px] ">
              <div className="flex ">

                <Link to="/" className="text-white hover:text-slate-300 px-3 py-2 rounded-md  font-medium">Home</Link>
                <Link to="/Sport" className="text-white hover:text-slate-300 px-3 py-2 rounded-md  font-medium">Sports</Link>
                <Link to="/Entertainment" className="text-white hover:text-slate-300 px-3 py-2 rounded-md  font-medium">Entertainment</Link>
                <Link to="/Business" className="text-white hover:text-slate-300 px-3 py-2 rounded-md  font-medium">Business</Link>
                <Link to="/Health" className="text-white hover:text-slate-300 px-3 py-2 rounded-md  font-medium">Health</Link>
                <Link to="/Science" className="text-white hover:text-slate-300 px-3 py-2 rounded-md  font-medium">Science</Link>
                <Link to="/Technology" className="text-white hover:text-slate-300 px-3 py-2 rounded-md  font-medium">Technology</Link>
                {/*Country selection option */}

              </div>
            </div>
          </div>
        </div>
      </div>

      {/*navbar css  change according to breakpoint */}
      <div className="hidden sm:block" id="breakpoint css">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img className="block h-12 w-auto lg:hidden" src={logo} alt="Dailink News" />
              <img className="hidden h-10 w-auto lg:block" src={logo} alt="Dailink News" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">

                <Link to="/" className="text-white hover:text-slate-300 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link to="/Sport" className="text-white hover:text-slate-300 px-3 py-2 rounded-md text-sm font-medium">Sports</Link>
                <Link to="/Entertainment" className="text-white hover:text-slate-300 px-3 py-2 rounded-md text-sm font-medium">Entertainment</Link>
                <Link to="/Business" className="text-white hover:text-slate-300 px-3 py-2 rounded-md text-sm font-medium">Business</Link>
                <Link to="/Health" className="text-white hover:text-slate-300 px-3 py-2 rounded-md text-sm font-medium">Health</Link>
                <Link to="/Science" className="text-white hover:text-slate-300 px-3 py-2 rounded-md text-sm font-medium">Science</Link>
                <Link to="/Technology" className="text-white hover:text-slate-300 px-3 py-2 rounded-md text-sm font-medium">Technology</Link>
                {/*Country selection option */}

              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>


  );

}
export default NavBar;