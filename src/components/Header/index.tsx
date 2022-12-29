import React from 'react';
import { Icons } from './../index';

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-center w-full gap-5 bg-gray-50 shadow-md">
      <div className=" p-2 hover:bg-gray-200 cursor-pointer">
        <Icons.SvgLogo className="h-7 w-40" />
      </div>
      <h3 className="text-sm font-light border-2 px-4 py-2 hover:bg-gray-200 rounded-full border-none cursor-pointer">
        Products
      </h3>
      <div>
        <Icons.SvgSearch className="h-5 w-5 fixed mt-2 ml-1" />
        <input
          className="border pl-10 rounded-md p-1"
          type="text"
          placeholder="Search..."
        />
      </div>
      <div className="flex flex-row">
        <div className="p-3 hover:bg-gray-200 cursor-pointer">
          <Icons.SvgUser className="h-5 w-5" />
        </div>
        <div className="p-3 hover:bg-gray-200 cursor-pointer">
          <Icons.SvgInbox className="h-5 w-5" />
        </div>
        <div className="p-3 hover:bg-gray-200 cursor-pointer">
          <Icons.SvgCup className="h-5 w-5" />
        </div>
        <div className="p-3 hover:bg-gray-200 cursor-pointer">
          <Icons.SvgHelp className="h-5 w-5" />
        </div>
        <div className="p-3 hover:bg-gray-200 cursor-pointer">
          <Icons.SvgSnow className="h-5 w-5" />
        </div>
        <div className="p-3 hover:bg-gray-200 cursor-pointer">
          <Icons.SvgList className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
};

export default Header;
