import { useParams } from "react-router";

const ToDos = () => {
const {month, day} = useParams()

  return (
    <div className="min-h-screen bg-white text-gray-900 transition-colors duration-200 dark:bg-gray-900 dark:text-white">
      <h1>Todos {day} {month}</h1>
    </div>
  );
};

export default ToDos;
