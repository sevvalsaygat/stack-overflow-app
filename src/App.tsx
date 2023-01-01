import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { Home, Development, Users } from './pages';
import { AuthProvider } from './hooks/useAuth';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/development" element={<Development />} />
        <Route path="/users/sign_in" element={<Users.SignIn />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
