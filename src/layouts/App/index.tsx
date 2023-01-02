import React from 'react';
import { Header, Footer } from './../../components';

type AppType = {
  children: React.ReactNode;
  hideFooter?: boolean;
};

const App = ({ children, hideFooter }: AppType) => {
  return (
    <div className="w-full bg-gray-200">
      <Header />
      <div className="w-8/12 mx-auto">{children}</div>

      {hideFooter ? null : <Footer />}
    </div>
  );
};

export default App;
