import React from 'react';
import { Icons } from './../index';

const Footer = () => {
  return (
    <div className="w-full bg-blue-footer h-80">
      <div className="w-8/12 mx-auto flex flex-row">
        <div className="w-1/12">
          <Icons.SvgLogoSmall className="h-10" />
        </div>
        <div className="w-2/12 justify-center">
          <h1 className="font-semibold text-gray-light">STACK OVERFLOW</h1>
          <ul className="text-sm text-gray-text mt-3">
            <li>Questions</li>
            <li>Help</li>
          </ul>
        </div>
        <div className="w-2/12 justify-center">
          <h1 className="font-semibold text-gray-light">PRODUCTS</h1>
          <ul className="text-sm text-gray-text mt-3">
            <li>Teams</li>
            <li>Advertising</li>
            <li>Collectives</li>
            <li>Talent</li>
          </ul>
        </div>
        <div className="w-2/12 justify-center">
          <h1 className="font-semibold text-gray-light">COMPANY</h1>
          <ul className="text-sm text-gray-text mt-3">
            <li>About</li>
            <li>Press</li>
            <li>Work Here</li>
            <li>Legal</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Contact Us</li>
            <li>Cookie Settings</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
        <div className="w-3/12 justify-center">
          <h1 className="font-semibold text-gray-light">
            STACK EXCHANGE NETWORK
          </h1>
          <ul className="text-sm text-gray-text mt-3">
            <li>Technology</li>
            <li>Culture & recretion</li>
            <li>Life & arts</li>
            <li>Science</li>
            <li>Professional</li>
            <li>Business</li>
            <li>API</li>
            <li>Data</li>
          </ul>
        </div>
        <div className="w-4/12 flex flex-col justify-between">
          <div className="flex flex-row gap-3 text-sm text-gray-text">
            <h1>Blog</h1>
            <h1>Facebook</h1>
            <h1>Twitter</h1>
            <h1>Linkedin</h1>
            <h1>Instagram</h1>
          </div>
          <p className="text-sm text-gray-text">
            Site design / logo © 2023 Stack Exchange Inc; user contributions
            licensed under CC BY-SA. rev 2022.12.21.43127
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
