import React from 'react';
import { Header, Footer } from './../../components';

type AppType = {
  children: React.ReactNode;
};

const App = ({ children }: AppType) => {
  return (
    // <div>
    //   <div className="w-full">
    //     <Header />
    //   </div>
    //   {children}
    //   <Footer />
    // </div>
    <div className="w-full">
      <Header />
      <div className="w-8/12 bg-red-500 mx-auto">{children}</div>
      <Footer />
    </div>
  );
};

export default App;
