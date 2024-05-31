import  { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isToggleOpen, setIsToggleOpen] = useState(false);
     const [isOpen, setIsOpen] = useState(false);

     const handleClick = () => {
       setIsOpen(!isOpen);
     };
    return (
      <header className="border-b-1 relative z-20 w-full border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-700/5 after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden ">
        <div className="relative mx-auto  px-6 lg:max-w-5xl xl:max-w-7xl max-w-7xl">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            <a
              id="WindUI"
              aria-label="WindUI logo"
              aria-current="page"
              className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
              href="javascript:void(0)"
            >
              <NavLink to="/">FitnessFreak</NavLink>
            </a>
            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
              ${
                isToggleOpen
                  ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
                  : ""
              }
            `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
              </div>
            </button>
            {/*      <!-- Navigation links --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-4"
                  href="javascript:void(0)"
                >
                  <NavLink to="/">
                    <span>Home</span>
                  </NavLink>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-current="page"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 text-emerald-500 transition-colors duration-300 hover:text-emerald-600 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                  href="javascript:void(0)"
                >
                  <span>All Trainer</span>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-4"
                  href="javascript:void(0)"
                >
                  <span>All Class</span>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-4"
                  href="javascript:void(0)"
                >
                  <span>Forum</span>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-4"
                  href="javascript:void(0)"
                >
                  <button className="inline-flex items-center justify-center h-10 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded-full whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                    <span>Login</span>
                  </button>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-4"
                  href="javascript:void(0)"
                >
                  <button className="inline-flex items-center justify-center h-10 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded-full whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                    <span>Sign Up</span>
                  </button>
                </a>
              </li>

              <div className="relative inline-flex ">
                <div className="ml-auto flex items-center px-6 lg:ml-0 lg:p-0">
                  {/*        <!-- Avatar --> */}
                  <a
                    onClick={handleClick}
                    className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-white"
                  >
                    <img
                      src="https://i.pravatar.cc/40?img=35"
                      alt="user name"
                      title="user name"
                      width="40"
                      height="40"
                      className="max-w-full rounded-full"
                    />
                  </a>
                </div>
                {isOpen && (
                  <ul className="absolute z-20 flex flex-col py-2 mt-1 list-none bg-white rounded shadow-md  top-full shadow-slate-500/10">
                    <li>
                      <a
                        className="flex items-start justify-start gap-2 p-2 px-5 transition-colors duration-300 text-slate-500 hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 focus:text-emerald-600 focus:outline-none focus-visible:outline-none"
                        href="#"
                      >
                        <span className="flex flex-col gap-1 overflow-hidden whitespace-nowrap">
                          <span className="leading-5 truncate">Dashboard</span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-start justify-start gap-2 p-2 px-5 transition-colors duration-300 text-slate-500 hover:bg-emerald-50 hover:text-emerald-600 focus:bg-emerald-50 focus:text-emerald-600 focus:outline-none focus-visible:outline-none"
                        href="#"
                        aria-current="page"
                      >
                        <span className="flex flex-col gap-1 overflow-hidden whitespace-nowrap">
                          <span className="leading-5 truncate">
                            Metrics and
                          </span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-start justify-start gap-2 p-2 px-5 overflow-hidden transition-colors duration-300 text-slate-500 hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 focus:text-emerald-600 focus:outline-none focus-visible:outline-none"
                        href="#"
                      >
                        <span className="flex flex-col gap-1 overflow-hidden whitespace-nowrap">
                          <span className="leading-5 truncate">email</span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-start justify-start gap-2 p-2 px-5 transition-colors duration-300 text-slate-500 hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 focus:text-emerald-600 focus:outline-none focus-visible:outline-none"
                        href="#"
                      >
                        <span className="flex flex-col gap-1 overflow-hidden whitespace-nowrap">
                          {" "}
                          <span className="leading-5 truncate">
                            User settings
                          </span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-start justify-start gap-2 p-2 px-5 transition-colors duration-300 text-slate-500 hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 focus:text-emerald-600 focus:outline-none focus-visible:outline-none"
                        href="#"
                      >
                        <span className="flex flex-col gap-1 overflow-hidden whitespace-nowrap">
                          <span className="leading-5 truncate">
                            User Profile
                          </span>
                        </span>
                      </a>
                    </li>
                  </ul>
                )}
              </div>
            </ul>
          </nav>
        </div>
      </header>
    );
};

export default Navbar;