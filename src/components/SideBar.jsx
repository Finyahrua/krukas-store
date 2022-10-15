import React from "react";
import Nouislider from "nouislider-react";



const SideBar = () => {
  // ** Array of categories
  const categories = [
    {
      id: "appliances",
      title: "Appliances",
      defaultChecked: true,
    },
    {
      id: "audio",
      title: "Audio",
    },
    {
      id: "camera-camcorders",
      title: "Camera & Camcorders",
    },
    {
      id: "car-electronics",
      title: "Car Electronics & Gps",
    },
    {
      id: "cellphones",
      title: "Cell Phones",
    },
    {
      id: "computers",
      title: "Computers & Tablets",
    },
    {
      id: "health-fitness-beauty",
      title: "Health, Fitness & Beauty",
    },
    {
      id: "office-school",
      title: "Office & School Supplies",
    },
    {
      id: "tv-home-theater",
      title: "TV & Home Theater",
    },
    {
      id: "video-games",
      title: "Video Games",
    },
  ];

  // ** Array of brands
  const brands = [
    {
      title: "Insignia™",
      total: 746,
    },
    {
      title: "Samsung",
      total: 633,
      checked: true,
    },
    {
      title: "Metra",
      total: 591,
    },
    {
      title: "HP",
      total: 530,
    },
    {
      title: "Apple",
      total: 422,
      checked: true,
    },
    {
      title: "GE",
      total: 394,
    },
    {
      title: "Sony",
      total: 350,
    },
    {
      title: "Incipio",
      total: 320,
    },
    {
      title: "KitchenAid",
      total: 318,
    },
    {
      title: "Whirlpool",
      total: 298,
    },
  ];
  return (
    <div className="mt-4 pb-5">
      <h4>Filters</h4>
      <div className=" mt-4 h-[85vh] w-60 border bg-white shadow-md">
        <div>
          <ul className="p-3">
            <h3 className="font-semibold">Multi Range</h3>
            <li>
              <div className="mt-2 flex items-center px-2">
                <input
                  type="radio"
                  id="all"
                  name="price-range-radio"
                  defaultChecked
                />
                <h2 className="pl-2 text-sm" for="all">
                  All
                </h2>
              </div>
            </li>
            <li>
              <div className="mt-2 flex items-center px-2">
                <input
                  type="radio"
                  id="all"
                  name="price-range-radio"
                  defaultChecked
                />
                <h2 className="pl-2 text-sm" for="all">
                  20000 -- 100000/=
                </h2>
              </div>
            </li>
            <li>
              <div className="mt-2 flex items-center px-2">
                <input
                  type="radio"
                  id="all"
                  name="price-range-radio"
                  defaultChecked
                />
                <h2 className="pl-2 text-sm" for="all">
                  20000 -- 100000/=
                </h2>
              </div>
            </li>
          </ul>
        </div>
        <div className="p-3">
          <h3 className="font-semibold">Price Range</h3>
          {/* <Nouislider
            className="range-slider mt-2"
            // direction={isRtl ? "rtl" : "ltr"}
            start={[1500, 3500]}
            connect={true}
            tooltips={[true, true]}
            // format={wNumb({
            //   decimals: 0,
            // })}
            range={{
              min: 51,
              max: 5000,
            }}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
