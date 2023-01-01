import React from 'react';
import { Icons } from './../index';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const I18N_SCOPE = 'components.header';
  const { t } = useTranslation();

  return (
    <div className="w-full bg-gray-100">
      <div className="w-8/12 bg-red-500 mx-auto">
        <div className="flex flex-row bg-gray-100 align-center items-center">
          <div className="w-2/12 p-2 hover:bg-gray-200 cursor-pointer flex justify-center">
            <Icons.SvgLogo className="h-7 w-40" />
          </div>
          <div className="w-7/12 flex flex-row gap-3">
            <h3 className="text-sm font-light px-4 py-2 hover:bg-gray-200 rounded-full cursor-pointer">
              Products
            </h3>
            <div className="flex flex-row w-full">
              <Icons.SvgSearch className="h-5 w-5 fixed mt-2 ml-3" />
              <input
                className="border border-gray-400 pl-10 rounded-md p-1 w-full focus:outline-blue-400
                focus:ring-4 focus:ring-blue-200 focus:border-transparent"
                type="text"
                placeholder={`${t(`${I18N_SCOPE}.search`)}...`}
              />
            </div>
          </div>
          <div className="w-3/12 flex flex-row justify-between">
            <div className="p-3 hover:bg-gray-200 cursor-pointer">
              <Icons.SvgUser className="h-5" />
            </div>
            <div className="p-3 hover:bg-gray-200 cursor-pointer">
              <Icons.SvgInbox className="h-5" />
            </div>
            <div className="p-3 hover:bg-gray-200 cursor-pointer">
              <Icons.SvgCup className="h-5" />
            </div>
            <div className="p-3 hover:bg-gray-200 cursor-pointer">
              <Icons.SvgHelp className="h-5" />
            </div>
            <div className="p-3 hover:bg-gray-200 cursor-pointer">
              <Icons.SvgSnow className="h-5" />
            </div>
            <div className="p-3 hover:bg-gray-200 cursor-pointer">
              <Icons.SvgList className="h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
