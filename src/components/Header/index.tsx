import React from 'react';
import { Icons } from './../index';

const Header = () => {
  return (
    <div className="flex flex-row gap-5 bg-light">
      <Icons.SvgLogo className="h-8 w-40" />
      <div className="flex flex-row gap-5">
        <div>Products</div>
        <input className="border-2" type="text" placeholder="Search..." />
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
