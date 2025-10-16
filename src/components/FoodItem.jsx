import { useContext } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";

export default function FoodItem({ id, name, description, price, image }) {
  const { cartItem, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <div className="w-full m-auto rounded-2xl shadow-lg overflow-hidden  animate-fade duration-1000">
      <div className="relative">
        <img
          src={image}
          alt=""
          className="w-full rounded-t-2xl rounded-r-2xl"
        />
        {!cartItem || !cartItem[id] ? (
          <img
            src={assets.add_icon_white}
            onClick={() => {
              return addToCart(id);
            }}
            className="w-7.5 absolute bottom-4 right-4 cursor-pointer"
          />
        ) : (
          <div className="absolute bottom-4 right-4 flex items-center gap-2.5 p-1.5 rounded-full bg-white">
            <img
              src={assets.remove_icon_red}
              onClick={() => {
                return removeFromCart(id);
              }}
              className="w-7.5"
            />
            <p>{cartItem[id]}</p>
            <img
              src={assets.add_icon_green}
              onClick={() => {
                return addToCart(id);
              }}
              className="w-7.5"
              alt=""
            />
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mb-2.5">
          <p className="text-xl font-semibold">{name}</p>
          <img src={assets.rating_starts} className="w-17.5" />
        </div>
        <p className="text-[#676767] text-xs">{description}</p>
        <p className="text-red-400 text-xl font-semibold my-2.5">${price}</p>
      </div>
    </div>
  );
}
