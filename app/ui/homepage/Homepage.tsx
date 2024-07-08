import Carousel from "./components/Carousel";
import "./style.css";
import Filters from "./components/Filters";
import Products from "./components/Products";
import Favorites from "./components/Favorites";
import Discounts from "./components/Discounts";

export default function Homepage() {
  return (
    <div
      className="mx-auto max-w-[1920px] px-3 md:px-8 2xl:px-16 3xl:px-16  width_max_dextop"
      style={{
        background: "whitesmoke",
      }}
    >
      <div
        className="items-center lg:flex lg:h-16 headerBottom mx-auto max-w-[1920px] tags-slider-header"
        style={{
          position: "relative",
          paddingTop: ".75rem",
          paddingBottom: "0",
        }}
      >
        {/* <Carousel /> */}
      </div>
      <div className="md:mt-4"></div>
      <div className="grid grid-cols-1 gap-5 md:gap-14 xl:gap-7 xl:grid-cols-7 2xl:grid-cols-7 mb-5 pt-2">
        <div className="xl:col-span-5 2xl:col-span-5 border-gray-300 rounded-lg">
          <Filters />
          <div className="grid grid-cols-1 md:grid-cols-1">
            <div className="h-auto">
              <Products />
              <Products />
              <Products />
              <Products />
            </div>
          </div>
        </div>
        <div
          className="flex flex-col border-white rounded-lg col-span-full xl:col-span-2 row-span-full xl:row-auto"
          style={{
            height: "max-content",
          }}
        >
          <Favorites />
          <Discounts />
        </div>
      </div>
    </div>
  );
}
