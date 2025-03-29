import Calendar from "../components/layout/CalendarLayout/Calendar";
import CalendarTitle from "../components/layout/CalendarLayout/CalendarTitle";
import Header from "../components/layout/Header";

const CalendarPage = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="">
        <div className="relative isolate min-h-screen items-center justify-center bg-gray-100 py-20 sm:px-0 md:px-5 lg:px-10 dark:bg-gray-900">
          <CalendarTitle />
          <Calendar />
        </div>
      </div>
    </main>
  );
};

export default CalendarPage;
