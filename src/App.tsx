import SignUp from './components/auth/SignUp';
import { Route, Routes } from 'react-router';
import LandingPage from './pages/LandingPage';
import SignIn from './components/auth/SignIn';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;
