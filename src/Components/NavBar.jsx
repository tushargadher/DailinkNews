import React, { Component } from "react";
import { Link } from "react-router-dom";


import logo from '../logo.png';

export default class NavBar extends Component {
  
  
  
  render() {
    return (
      
        <nav className="bg-neutral-800">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
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

          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pt-2 pb-3">

              <Link to="/" className="text-white hover:text-slate-300 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/Sport" className="text-white hover:text-slate-300 px-3 py-2 rounded-md text-sm font-medium">Sports</Link>
              <Link to="/Entertainment" className="text-white hover:text-slate-300 px-3 py-2 rounded-md text-sm font-medium">Entertainment</Link>
              <Link to="/Business" className="text-white hover:text-slate-300 px-3 py-2 rounded-md text-sm font-medium">Business</Link>
              <Link to="/Health" className="text-white hover:text-slate-300 px-3 py-2 rounded-md text-sm font-medium">Health</Link>
              <Link to="/Science" className="text-white hover:text-slate-300 px-3 py-2 rounded-md text-sm font-medium">Science</Link>
              <Link to="/Technology" className="text-white hover:text-slate-300 px-3 py-2 rounded-md text-sm font-medium">Technology</Link>
            </div>
          </div>
        </nav>
  
      
    );
  }
}