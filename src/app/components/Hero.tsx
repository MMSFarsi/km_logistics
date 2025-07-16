import Image from "next/image";
import bgImage from "../../../public/bg-banner.jpg";
import img1 from "../../../public/img1.jpeg";
import img2 from "../../../public/plane.webp";
import img3 from "../../../public/truck.jpeg";

const Hero = () => {
  return (
    <section className="relative rounded-[17px] h-screen overflow-hidden mt-4 bg-black text-white pt-24">
      <Image
        src={bgImage}
        alt="Background"
        className="object-cover opacity-90"
        fill
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col justify-center h-full">
        <div className="mb-4 bg-white/20  px-5 py-2 rounded-full w-fit backdrop-blur-sm">
          4+ Years in the market
        </div>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Smart Shipping <br /> Seamless Logistics
        </h1>

        <p className="text-lg md:text-xl mt-6 max-w-xl text-white/90">
          With KM Logistics, experience seamless cargo transportation backed by
          unmatched service and dedication.
        </p>

        <div className="flex space-x-4 mt-6 text-white text-2xl">
          <div className="w-[30px] h-[30px] rounded-full border border-white flex items-center justify-center shadow">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/ios-filled/50/FFFFFF/sailing-ship-large.png"
              alt="Ship"
            />
          </div>
          <div className="w-[30px] h-[30px] rounded-full border border-white flex items-center justify-center shadow">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/ios-filled/50/FFFFFF/airplane-take-off.png"
              alt="airplane-take-off"
            />
          </div>
          <div className="w-[30px] h-[30px] rounded-full border border-white flex items-center justify-center shadow">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/ios-filled/50/FFFFFF/truck.png"
              alt="truck"
            />
          </div>
        </div>
        <div className="mt-10 max-w-[420px] absolute bottom-4 w-fit bg-white text-black p-3 rounded-3xl flex items-center gap-3 shadow-lg">
          <div className="flex    ">
            <Image
              src={img1}
              alt="Sea"
              width={100}
              height={40}
              className=" rounded-xl  top-0 left-0 w-18 relative  object-cover "
            />
            <Image
              src={img2}
              alt="plane"
              width={100}
              height={40}
              className="rounded-xl object-cover relative  top-0 right-4 w-18"
            />
            <Image
              src={img3}
              alt="truck"
              width={100}
              height={40}
              className="rounded-xl relative object-cover right-8 w-18"
            />
          </div>
          <p className="ml-20 text-lg font-semibold">
            Enabling flawless logistics across the globe →
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
