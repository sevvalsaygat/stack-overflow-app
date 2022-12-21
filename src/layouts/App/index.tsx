import React from 'react';
import { Header, Footer } from './../../components';

type AppType = {
  children: React.ReactNode
}

const App = ({children}: AppType) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default App;
