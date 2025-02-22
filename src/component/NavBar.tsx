const NavBar = () => {
  return (
    <nav class="bg-zinc-900 fixed w-screen max-w-full z-20 top-0 start-0">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          className="text-2xl font-medium text-white hover:text-indigo-700"
          href="/"
        >
          packetevents
        </a>

        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a
            type="button"
            href="https://docs.packetevents.com/getting-started"
            target="_"
            class="text-white bg-indigo-800 hover:bg-indigo-700 focus:ring-1 focus:outline-none 
            focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center "
          >
            Get started
          </a>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm 
            text-gray-500 rounded-lg md:hidden hover:bg-zinc-800 focus:outline-none focus:ring-1 
            focus:ring-zinc-200"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg bg-zinc-800 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-zinc-900 ">
            <li>
              <a
                href="https://docs.packetevents.com/"
                target="_"
                class="block py-2 px-3 text-white rounded hover:bg-zinc-900 md:hover:bg-transparent md:hover:text-indigo-700 md:p-0 "
              >
                Docs
              </a>
            </li>
            <li>
              <a
                href="https://github.com/retrooper/packetevents-example"
                target="_"
                class="block py-2 px-3 text-white rounded hover:bg-zinc-900 md:hover:bg-transparent md:hover:text-indigo-700 md:p-0 "
              >
                Examples
              </a>
            </li>
            <li>
              <a
                href="/blog"
                class="block py-2 px-3 text-white rounded hover:bg-zinc-900 md:hover:bg-transparent md:hover:text-indigo-700 md:p-0 "
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
