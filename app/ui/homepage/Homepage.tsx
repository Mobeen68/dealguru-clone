import Carousel from "./components/Carousel";
import "./style.css";
import Filters from "./components/Filters";
import Products from "./components/Products";

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
        <Carousel />
      </div>
      <div className="md:mt-4"></div>
      <div className="grid grid-cols-1 gap-5 md:gap-14 xl:gap-7 xl:grid-cols-7 2xl:grid-cols-7 mb-5 pt-2">
        <div className="xl:col-span-5 2xl:col-span-5  border-gray-300 rounded-lg">
          <Filters />
          <Products />
        </div>
      </div>
    </div>
  );
}
