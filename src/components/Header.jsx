import React from "react";

function Header() {
  return (
    <nav class="px-[40px] py-[40px]  w-screen">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <a href="javascript:void(0)" class="flex items-center">
          <img src="./Union.png" class="mr-3 h-9 sm:h-9" alt="MynthMedia Logo" />
        </a>
        <div class="flex items-center md:order-2">
          <span data-dropdown-toggle="language-dropdown-menu " class="mr-[20px] inline-flex justify-center items-center p-2 text-sm text-white rounded cursor-pointer ">
            <img class="w-8 h-8 rounded-full mr-[10px]" src="./profile.png" alt="" />
            1AZFAFASFASZ
          </span>
          <img class="w-8 h-8 rounded-full mr-[5px] w-[20px] h-[20px] hidden justify-between items-center w-full md:flex md:w-auto md:order-1" src="./notif.png" alt="" />
          <img class="w-8 h-8 rounded-full mr-[5px] w-[20px] h-[20px] hidden justify-between items-center w-full md:flex md:w-auto md:order-1" src="./settings.png" alt="" />
          <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="mobile-menu-2" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
        </div>

        <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
          <ul class="flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            <li>
              <a href="#" class="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#B1FF0B] md:p-[10px]" aria-current="page">Explore</a>
            </li>
            <li>
              <a href="#" class="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#B1FF0B] md:p-[10px]">Collections</a>
            </li>
            <li>
              <a href="#" class="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#B1FF0B] md:p-[10px]">My Items</a>
            </li>
            <li>
              <a href="#" class="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#B1FF0B] md:p-[10px]">Creators</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
};

export default Header;
