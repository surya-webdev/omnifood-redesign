import { HiOutlineFire, HiOutlineStar } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi2";

function App() {
  const listItem = `flex lg:text-xl font-semibold my-2 md:text-xl sm:text-lg`;
  const svg = "translate-y-1  text-orange-500 mr-2";
  return (
    <section className="container m-6">
      <div className="grid cursor-pointer md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-6">
        <div className="flex flex-col gap-4 rounded-lg py-3 shadow-md transition-all duration-300 hover:-translate-y-4">
          <img
            className="rounded-md"
            src="https://omnifood-surya-dev.netlify.app/img/meals/meal-1.jpg"
            alt="food"
          />
          <ul className="my-6 flex flex-col gap-4 px-4">
            <li>
              <span className="rounded-md bg-green-600 p-2 font-bold text-slate-50 md:text-xl">
                VEGETARIAN
              </span>
            </li>
            <li className="text-3xl font-bold md:text-2xl">
              <span>Japanese Gyozas</span>
            </li>
            <li className={listItem}>
              <span className={svg}>
                <HiOutlineFire />
              </span>
              <span>650 calories</span>
            </li>
            <li className={listItem}>
              <span className={svg}>
                <HiOutlineHeart />
              </span>
              <span>NutriScore ® 92</span>
            </li>
            <li className={listItem}>
              <span className={svg}>
                <HiOutlineStar />
              </span>
              <span> 4.8 rating (441)</span>
            </li>
          </ul>
        </div>
        <div className="my-10 flex flex-col gap-4 rounded-lg py-3 shadow-md transition-all duration-300 hover:-translate-y-4">
          <img
            className="rounded-md"
            src="https://omnifood-surya-dev.netlify.app/img/meals/meal-1.jpg"
            alt="food"
          />
          <ul className="my-6 flex flex-col gap-4 px-4">
            <li>
              <span className="rounded-md bg-green-600 p-2 font-bold text-slate-50">
                VEGETARIAN
              </span>
            </li>
            <li className="text-3xl font-bold">
              <span>Japanese Gyozas</span>
            </li>
            <li className={listItem}>
              <span className={svg}>
                <HiOutlineFire />
              </span>
              <span>650 calories</span>
            </li>
            <li className={listItem}>
              <span className={svg}>
                <HiOutlineHeart />
              </span>
              <span>NutriScore ® 92</span>
            </li>
            <li className={listItem}>
              <span className={svg}>
                <HiOutlineStar />
              </span>
              <span> 4.8 rating (441)</span>
            </li>
          </ul>
        </div>
        <div className="my-10 flex flex-col gap-4 rounded-lg py-3 shadow-md transition-all duration-300 hover:-translate-y-4 md:col-span-full md:w-6/12 md:self-center md:justify-self-center lg:col-span-1 lg:w-full">
          <img
            className="rounded-md"
            src="https://omnifood-surya-dev.netlify.app/img/meals/meal-1.jpg"
            alt="food"
          />
          <ul className="my-6 flex flex-col gap-4 px-4">
            <li>
              <span className="rounded-md bg-green-600 p-2 font-bold text-slate-50">
                VEGETARIAN
              </span>
            </li>
            <li className="text-3xl font-bold">
              <span>Japanese Gyozas</span>
            </li>
            <li className={listItem}>
              <span className={svg}>
                <HiOutlineFire />
              </span>
              <span>650 calories</span>
            </li>
            <li className={listItem}>
              <span className={svg}>
                <HiOutlineHeart />
              </span>
              <span>NutriScore ® 92</span>
            </li>
            <li className={listItem}>
              <span className={svg}>
                <HiOutlineStar />
              </span>
              <span> 4.8 rating (441)</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default App;
