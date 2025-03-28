import Header from "../components/layout/Header";

const Calendar = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="">
        <div className="relative isolate min-h-screen items-center justify-center bg-gray-100 pt-20 sm:px-16 lg:px-8 dark:bg-gray-900">
          <div className="max-w-full rounded-3xl bg-white p-8 shadow-lg dark:bg-gray-800">
            <h1 className="text-center text-2xl font-semibold text-gray-800 dark:text-white">
              Calendar
            </h1>
            <p className="mt-2 text-center text-gray-600 dark:text-gray-400">
              Here is where your calendar will be displayed.
            </p>
          </div>
          <div className="mt-8 items-center justify-center gap-4 rounded-2xl bg-white shadow-lg dark:bg-gray-800">
            <div className="flex items-center justify-evenly gap-3 rounded-t-2xl border-b-2 bg-gray-200 py-4 sm:max-w-full dark:border-b-white dark:bg-gray-700">
              <p className="hidden cursor-pointer justify-start text-start text-2xl sm:flex dark:text-white">
                {"<"} <span className="hover:underline">February</span>
              </p>
              <p className="cursor-pointer justify-start text-start text-4xl hover:underline active:underline dark:text-white">
                March
              </p>
              <p className="hidden cursor-pointer justify-start text-start text-2xl sm:flex dark:text-white">
                <span className="hover:underline">April</span> {">"}
              </p>
            </div>
            <div className="grid grid-cols-7 content-center gap-7 px-3 py-4 break-words sm:gap-10 sm:px-8 dark:text-white">
              <div>
                <span>mon</span>
                <span>tue</span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="size-7 cursor-pointer rounded-full border text-center hover:bg-amber-400">
                1
              </span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>6</span>
              <span>7</span>
              <span>8</span>
              <span>9</span>
              <span>10</span>
              <span>11</span>
              <span>12</span>
              <span>13</span>
              <span>14</span>
              <span>15</span>
              <span>16</span>
              <span>17</span>
              <span>18</span>
              <span>19</span>
              <span>20</span>
              <span>21</span>
              <span>22</span>
              <span>23</span>
              <span>24</span>
              <span>25</span>
              <span>26</span>
              <span>27</span>
              <span>28</span>
              <span>29</span>
              <span>30</span>
              <span>31</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Calendar;
