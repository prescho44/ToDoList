import SignUp from "./components/auth/SignUp";
import { Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage";
import SignIn from "./components/auth/SignIn";
import Footer from "./components/layout/Footer";
import NotFound from "./pages/NotFound";
import Calendar from "./pages/CalendarPage";

const App = () => {
  return (
    <div className="flex h-screen flex-col">
      <div className="flex-grow">
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
