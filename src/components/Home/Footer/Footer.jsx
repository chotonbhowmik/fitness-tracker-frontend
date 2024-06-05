

const Footer = () => {
    return (
      <div>
        <footer className="w-full text-slate-500 ">
          <div className="border-t border-slate-200 bg-slate-100 py-4 text-sm ">
            <div className="container mx-auto px-6 max-w-7xl mx-auto">
              <div className="grid grid-cols-4 items-center gap-6 md:grid-cols-8 lg:grid-cols-12">
                <a
                  id="WindUI-4-sub"
                  aria-label="WindUI logo"
                  aria-current="page"
                  className="col-span-1 flex items-center gap-2 whitespace-nowrap text-base font-medium leading-6 focus:outline-none md:col-span-4 lg:col-span-6"
                  href="javascript:void(0)"
                >
                  FitnessFreak
                </a>
                <nav
                  className="col-span-3 md:col-span-4 lg:col-span-6"
                  aria-labelledby="subfooter-links-3-sub"
                >
                  <h3 className="sr-only" id="subfooter-links-3-sub">
                    Get in touch
                  </h3>
                  <ul className="flex flex-wrap items-center justify-end gap-2 lg:gap-4">
                    <li className="leading-6">
                      <a
                        href="javascript:void(0)"
                        className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                      >
                        T&C
                      </a>
                    </li>
                    <li className="leading-6">
                      <a
                        href="javascript:void(0)"
                        className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                      >
                        Privacy
                      </a>
                    </li>
                    <li className="leading-6">
                      <a
                        href="javascript:void(0)"
                        className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                      >
                        Cookies
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
};

export default Footer;