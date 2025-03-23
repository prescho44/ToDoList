import { FC } from 'react';
import Register from './components/auth/Register';
import { Route, Routes } from 'react-router';
import LandingPage from './pages/LandingPage';

const App: FC = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
