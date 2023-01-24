import React from "react";
import lll  from '../assets/img.png'
function Nav() {
    return(
        <div>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-sky-500 mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div
                        className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
                        <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                           href="#pablo">
                            <img src={lll} style={{height:'50px', width:'80px'}} alt={"jsa"}></img>
                        </a>
                        <button
                            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button">
                            <span className="block relative w-6 h-px rounded-sm bg-white"></span>
                            <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                            <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                        </button>
                    </div>
                    <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
                        <ul className="flex flex-col lg:flex-row list-none ml-auto">
                            <li className="nav-item">
                                <a className="px-3 py-2 hover:bg-blue-800 hover:border-blue-800 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-100"
                                   href="/">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="px-3 hover:bg-blue-800 hover:border-blue-800 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-100"
                                   href="#">
                                    Profile
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="px-3 py-2 hover:bg-blue-800 hover:border-blue-800 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-100"
                                   href="#pablo">
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="px-3 py-2 flex hover:bg-blue-800 hover:border-blue-800 items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-100"
                                   href="#pablo">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav;