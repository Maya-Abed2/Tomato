import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

export default function PlaceOrder() {
  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <div className="container mx-auto px-6">
    <form className="flex flex-col md:flex-row items-start justify-between gap-12.5">
      <div className="w-full" style={{maxWidth:"max(30%,500px)"}}>
        <p className="text-xl font-semibold mb-12.5">Delivery Information</p>
        <div className="flex gap-3">
          <input type="text" placeholder="First Name"  className="mb-4.5 w-full p-2.5 border-1 border-[#c5c5c5] rounded-sm outline-[#FF6347]"/>
          <input type="text" placeholder="Last Name" className="mb-4.5 w-full p-2.5 border-1 border-[#c5c5c5] rounded-sm outline-[#FF6347]" />
        </div>
        <input type="email" placeholder="email address" className="mb-4.5 w-full p-2.5 border-1 border-[#c5c5c5] rounded-sm outline-[#FF6347]" />
        <input type="text" placeholder="street" className="mb-4.5 w-full p-2.5 border-1 border-[#c5c5c5] rounded-sm outline-[#FF6347]" />
        <div className="flex gap-3">
          <input type="text" placeholder="City"  className="mb-4.5 w-full p-2.5 border-1 border-[#c5c5c5] rounded-sm outline-[#FF6347]"/>
          <input type="text" placeholder="State" className="mb-4.5 w-full p-2.5 border-1 border-[#c5c5c5] rounded-sm outline-[#FF6347]" />
        </div>
        <div className="flex gap-3">
          <input type="text" placeholder="Code" className="mb-4.5 w-full p-2.5 border-1 border-[#c5c5c5] rounded-sm outline-[#FF6347]" />
          <input type="text" placeholder="Country" className="mb-4.5 w-full p-2.5 border-1 border-[#c5c5c5] rounded-sm outline-[#FF6347]" />
        </div>
        <input type="text" placeholder="Phone"  className="mb-4.5 w-full p-2.5 border-1 border-[#c5c5c5] rounded-sm outline-[#FF6347]"/>
      </div>
      <div className="w-full" style={{maxWidth:"max(40%,500px)"}}>
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
          <button className="mt-2.5 text-white bg-[#FF6347] py-2.5 px-4 rounded-sm cursor-pointer w-fit">PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
    </div>
  );
}
