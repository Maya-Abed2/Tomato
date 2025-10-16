import { menu_list } from "../assets/assets";

// Swiper.js Lib=======================
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// =================================

export default function ExploreMenu({category,setCategory}) {
  return (
    <div className="my-15 flex flex-col gap-5" id="explore_menu">
      <h1 className="text-4xl font-semibold text-[#262626]">Explore our menu</h1>
      <p className="md:max-w-1/2 text-[#808080z]">
        choose from a diverse menu featuring a delectable array of dishes
        crafted with the finest ingredients and culinary expertise.our mission
        is to satisfy your cravings.
      </p>
      <div style={{ height: "300px", width: "80%", margin: "0 auto" }}>
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true, // Makes the dots clickable for navigation
          }}
          // Basic Swiper settings
          spaceBetween={50}
          slidesPerView={2}
          className="mySwiper" // Optional class for custom 
          // styling

          breakpoints={{
            768:{
                slidesPerView:3,
                spaceBetween:45
            },
            1024:{
                slidesPerView:5,
                spaceBetween:50
            }
          }}
        >
          {menu_list.map((dish, index) => (
            <SwiperSlide key={index} className="mb-20 animate-fade-left animate-once animate-duration-700 animate-delay-500" onClick={()=>(
                setCategory(prev=>prev === dish.menu_name?'All':dish.menu_name))}>
              <img src={dish.menu_image} alt={dish.menu_name} 
              className={category === dish.menu_name?'border-4 rounded-full border-red-400 p-0.5':''}/>
              <p className="mx-10 mt-2 text-lg text-[#747474] cursor-pointer">{dish.menu_name}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <hr className="my-2.5 h-0.5 text-[#e2e2e2]"/>
    </div>
  );
}
