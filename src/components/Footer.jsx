import { Grid } from "swiper/modules";
import { assets } from "../assets/assets";

export default function Footer() {
  return (
    <div className="text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-5 px-[4vw] pb-5 pt-20 mt-20 " id="contact">
      <div className="w-full grid md:grid-cols-3 gap-20">
        <div>
            <img src={assets.logo} />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus eveniet deserunt omnis? Perspiciatis a rem, omnis illum iure accusamus nisi, laborum fugit laudantium earum, suscipit unde sint facilis maxime expedita.</p>
            <div className="flex gap-2.5 mt-2.5">
                <img src={assets.facebook_icon} alt="facebook" className="w-10 mr-4.5" />
                <img src={assets.twitter_icon} alt="twitter" className="w-10 mr-4.5" />
                <img src={assets.linkedin_icon} alt="linkedin" className="w-10 mr-4.5" />
            </div>
        </div>
        <div className="flex flex-col items-center gap-5">
            <h2 className="text-2xl font-semibold text-white">COMPANY</h2>
            <ul>
                <li className="mb-1 cursor-pointer">Home</li>
                <li className="mb-1 cursor-pointer">About us</li>
                <li className="mb-1 cursor-pointer">Delivery</li>
                <li className="mb-1 cursor-pointer">Privacy policy</li>
            </ul>
        </div>
        <div className="flex flex-col items-center gap-5">
            <h2 className="text-2xl font-semibold text-white">GET IN TOUCH</h2>
            <ul>
                <li className="mb-2.5">+1-212-456-7890</li>
                <li className="mb-2.5">whatevet@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr className="w-full h-0.5 bg-gray-400" />
      <p>Copyright 2025 @ Tomato.com - ALL Right Reserved.</p>
    </div>
  )
}
