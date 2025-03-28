import SignUp from "./components/auth/SignUp";
import { Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage";
import SignIn from "./components/auth/SignIn";
import Footer from "./components/layout/Footer";
import NotFound from "./pages/NotFound";
import CalendarPage from "./pages/CalendarPage";
import Header from "./components/layout/Header";

const App = () => {
  return (
    <div className="flex h-screen flex-col">
      <div className="flex-grow">
        <Header />
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
