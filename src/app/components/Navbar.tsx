import Image from "next/image";

export default function Navbar() {
    return(
  <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 dark:bg-gray-900 bg-repeat bg-center"
    style={{
        backgroundImage: 'url("/woke.jpg")',
        // backgroundColor: 'rgba(255, 255, 255, 0.5)', // Transparansi 50%
        backgroundBlendMode: 'overlay',
    }}>
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
        <Image
          src="/logo.png"
          className="h-8"
          alt="Flowbite Logo"
          width={32}
          height={32}
        />
        {/* Teks untuk layar besar */}
        <span className="hidden lg:block self-center text-2xl font-semibold whitespace-nowrap text-gray-300">
          SMK Sangkuriang 1 Cimahi
        </span>
        {/* Teks untuk layar tablet */}
        <span className="hidden md:block lg:hidden self-center text-2xl font-semibold whitespace-nowrap text-gray-300">
          Sakuci
        </span>
      </a>
      <button
        data-collapse-toggle="navbar-dropdown"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-dropdown"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div
        className="hidden w-full md:block md:w-auto"
        id="navbar-dropdown"
      >
        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white/50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800/50 md:dark:bg-transparent dark:border-gray-700">
          <li>
            <a
              href="#"
              className="block py-2 px-3 text-white bg-blue-700/50 rounded md:bg-transparent md:text-yellow-300 md:p-0 md:dark:text-blue-500 dark:bg-blue-600/50 md:dark:bg-transparent"
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li>
            <button
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              className="flex items-center justify-between w-full py-2 px-3 text-gray-300 rounded hover:bg-gray-100/50 md:hover:bg-transparent md:border-0 md:hover:text-yellow-300 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700/50 md:dark:hover:bg-transparent"
            >
              Dropdown
              <svg
                className="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              id="dropdownNavbar"
              className="z-10 hidden font-normal bg-white/50 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700/50 dark:divide-gray-600"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-400"
                aria-labelledby="dropdownLargeButton"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-yellow-300 dark:hover:bg-gray-600/50 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-yellow-300 dark:hover:bg-gray-600/50 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-yellow-300 dark:hover:bg-gray-600/50 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
              </ul>
              <div className="py-1">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-300 dark:hover:bg-gray-600/50 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </a>
              </div>
            </div>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-100/50 md:hover:bg-transparent md:border-0 md:hover:text-yellow-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700/50 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-100/50 md:hover:bg-transparent md:border-0 md:hover:text-yellow-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700/50 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-100/50 md:hover:bg-transparent md:border-0 md:hover:text-yellow-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700/50 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

    
    )
}