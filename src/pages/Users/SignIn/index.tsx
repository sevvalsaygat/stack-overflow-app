import React from 'react';
import { AppLayout } from './../../../layouts';
import { Icons } from './../../../components';
/*eslint-disable*/
const SignIn = () => {
  return (
    <AppLayout hideFooter={true}>
      <div
        className="flex flex-col justify-center items-center w-full"
        style={{
          height: 'calc(100vh - 44px)',
        }}
      >
        <div className="w-80">
          <div className="flex justify-center">
            <Icons.SvgLogoSmall className="h-10 w-40" />
          </div>
          <div className="flex flex-col gap-3 mt-6">
            <div className="flex justify-center">
              <Icons.SvgGoogle className="h-5 w-5 fixed mt-2 mr-36" />
              <button
                className="border border-gray-300 bg-white hover:bg-gray-300 text-zinc-900 text-sm w-full h-10
              rounded-md "
              >
                Log in with Google
              </button>
            </div>
            <div className="flex justify-center">
              <Icons.SvgGithub className="h-6 w-5 fixed mt-2 mr-36 text-white" />
              <button
                className="border border-gray-300 bg-blue-dark hover:bg-blue-footer text-white text-sm w-full h-10
              rounded-md "
              >
                Log in with Github
              </button>
            </div>
            <div className="flex justify-center">
              <Icons.SvgFacebook className="h-6 w-5 fixed mt-2 mr-40 text-white" />
              <button
                className="border border-blue-900 bg-blue-facebook hover:bg-blue-900 text-white text-sm w-full h-10
              rounded-md "
              >
                Log in with Facebook
              </button>
            </div>
            <div className="flex flex-col bg-white rounded w-full h-56 gap-4 p-5">
              <div className="flex flex-col">
                <label htmlFor="email" className="font-medium">
                  Email
                </label>
                <input
                  id="email"
                  className="border border-gray-light h-8 w-full rounded"
                ></input>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row justify-between">
                  <label htmlFor="password" className="font-medium">
                    Passwword
                  </label>
                  <a className="text-blue-text hover:text-blue-400 cursor-pointer text-sm">
                    Forgot password?
                  </a>
                </div>
                <input
                  id="password"
                  className="border border-gray-light h-8 w-full rounded"
                ></input>
              </div>
              <button className="border border-blue-light bg-blue-back hover:bg-blue-text h-10 rounded text-white text-sm">
                Log in
              </button>
            </div>
            <div className="flex flex-col gap-2 mt-8">
              <div className="flex flex-row gap-2 px-14 justify-center">
                <div className="text-sm">Don't have an account?</div>
                <a className="text-blue-text text-sm cursor-pointer hover:text-blue-400">
                  Sign up
                </a>
              </div>
              <div className="flex flex-row gap-2 justify-center">
                <div className="text-sm">Are you an employer?</div>
                <div className="flex flex-row gap-2 items-center">
                  <a className="text-blue-text text-sm cursor-pointer hover:text-blue-400">
                    Sign up on Talent
                  </a>
                  <Icons.SvgOpenLink className="h-4 w-4 text-blue-text cursor-pointer hover:text-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};
/* eslint-enable*/

export default SignIn;
