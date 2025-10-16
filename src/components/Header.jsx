import { assets } from "../assets/assets";
export default function Header() {
  return (
    <div>
      <div
        className="bg-cover bg-center
  min-h-[80vh] rounded-2xl flex items-center"
        style={{ backgroundImage: `url('${assets.header_img}')` }}
      >
        <div className="text-white text-center md:text-start md:max-w-1/2 animate-fade animate-duration-1500 md:pl-20">
          <h2 className="font-semibold text-3xl md:text-6xl">Order you favorite food here</h2>
          <p className="text-lg md:text-[1vw] my-8">
            choose from a diverse menu featuring a delectable array of dishes
            crafted with the finest ingredients and culinary expertise.our
            mission is to satisfy your cravings.
          </p>
          <button className="bg-white rounded-full text-[#747474] font-semibold py-[1vw] px-[2.3vw]">View Menu</button>
        </div>
      </div>
    </div>
  );
}
