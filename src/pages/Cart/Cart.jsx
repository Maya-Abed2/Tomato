import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cartItem, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);

  const navigate = useNavigate();
  return (
    <div className="container px-4 mx-auto">
      <div>
        <div className="grid grid-cols-6 items-center">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr className="text-[#b5b5b5]" />
        {food_list.map((item) => {
          if (cartItem[item._id] > 0) {
            return (
              <div
                key={item._id}
                className="grid grid-cols-6 items-center border-b border-[#b5b5b5] py-4"
              >
                <img src={item.image} alt={item.name} className="w-12 h-12" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItem[item._id]}</p>
                <p>${item.price * cartItem[item._id]}</p>
                <p
                  onClick={() => removeFromCart(item._id)}
                  className="cursor-pointer text-red-500"
                >
                  x
                </p>
              </div>
            );
          }
          return null; 
        })}
      </div>
      <div className="mt-20 flex justify-between flex-col md:flex-row gap-40">
        <div className="flex-1 flex flex-col">
          <h2 className="font-bold text-xl">Cart Totals</h2>
          <div>
            <div className="flex justify-between text-[#555]">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className="my-2.5"/>
            <div className="flex justify-between text-[#555]">
              <p>Delivery Fee</p>
              <p>${2}</p>
            </div>
            <hr className="my-2.5"/>
            <div className="flex justify-between text-[#555]">
              <b>Total</b>
              <b>${getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button className="mt-2.5 text-white bg-[#FF6347] py-2.5 px-4 rounded-sm cursor-pointer w-fit" onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="flex-1">
          <p className="text-[#555]">If you have a promo code, Enter it here</p>
          <div className="mt-2.5 flex justify-between items-center flex-col md:flex-row bg-[#eaeaea] rounded-sm py-3 md:py-0">
            <input type="text" placeholder="promo code" className="pl-2.5 max-sm:mb-2.5"/>
            <button className="py-3 px-1.5 bg-black text-white rounded-sm" style={{width:"max(10vw,200px)"}} >submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
