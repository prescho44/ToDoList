import Calendar from "../components/layout/Calendar";
import Header from "../components/layout/Header";

const CalendarPage = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="">
        <div className="relative isolate min-h-screen items-center justify-center bg-gray-100 py-20 sm:px-0 md:px-5 lg:px-10 dark:bg-gray-900">
          <div className="max-w-full rounded-3xl bg-white p-8 shadow-lg dark:bg-gray-800">
            <h1 className="text-center text-2xl font-semibold text-gray-800 dark:text-white">
              Calendar
            </h1>
            <p className="mt-2 text-center text-gray-600 dark:text-gray-400">
              Here is where your calendar will be displayed.
            </p>
          </div>
          <Calendar />
        </div>
      </div>
    </main>
  );
};

export default CalendarPage;
