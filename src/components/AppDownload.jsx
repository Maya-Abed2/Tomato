import { assets } from "../assets/assets";

export default function AppDownload() {
  return (
    <div
      id="mobile"
      className="container mx-auto px-4 text-center flex flex-col justify-center font-semibold mt-25 text-2xl md:text-5xl"
    >
      <p>
        For better experience Download <br /> Tomato App
      </p>
      <div className="flex justify-center items-center flex-col md:flex-row mt-10 gap-7">
        <img src={assets.play_store} alt="" className="max-w-full w-[150px]  md:w-[200px] hover:animate-jump animate-duration-[4000ms]" />
        <img src={assets.app_store} alt="" className="max-w-full w-[150px] md:w-[200px]
        hover:animate-jump animate-duration-[4000ms]" />
      </div>
    </div>
  );
}
