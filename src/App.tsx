import SignUp from "./components/auth/SignUp";
import { Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage";
import SignIn from "./components/auth/SignIn";
import Footer from "./components/layout/Footer";
import NotFound from "./pages/NotFound";
import CalendarPage from "./pages/CalendarPage";
import Header from "./components/layout/Header";
import ToDos from "./components/layout/ToDosLayout/ToDos";
import Authenticated from "./components/auth/Authenticated";

const App = () => {
  return (
    <div className="flex h-screen flex-col">
      <div className="flex-grow">
        <Header />
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Authenticated>
          <Routes>
            <Route path="/calendar/:month/to-dos/:day" element={<ToDos />} />
            <Route path="/calendar" element={<CalendarPage />} />
          </Routes>
        </Authenticated>
        <Footer />
      </div>
    </div>
  );
};

export default App;
