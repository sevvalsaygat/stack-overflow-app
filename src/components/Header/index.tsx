import React from 'react';
import { Icons } from './../index';

const Header = () => {
  return (
    <div className="flex flex-row mx-auto w-full gap-5 bg-gray-200">
      <div>
        <Icons.SvgLogo className="h-8 w-40" />
      </div>
      <h3 className="">Products</h3>
      <div>
        <Icons.SvgSearch className="h-5 w-5 fixed top-1" />
        <input className="border-2 pl-10" type="text" placeholder="Search..." />
      </div>
      <div className="flex flex-row gap-5">
        <Icons.SvgInbox className="h-5 w-5" />
        <Icons.SvgCup className="h-5 w-5" />
        <Icons.SvgHelp className="h-5 w-5" />
        <Icons.SvgSnow className="h-5 w-5" />
        <Icons.SvgList className="h-5 w-5" />
      </div>
    </div>
  );
};

export default Header;
