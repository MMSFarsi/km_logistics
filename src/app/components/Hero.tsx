import Image from "next/image";
import bgImage from "../../../public/bg-banner.jpg";
import img1 from "../../../public/img1.jpeg";
import img2 from "../../../public/plane.webp";
import img3 from "../../../public/truck.jpeg";

const Hero = () => {
  return (
    <section className="relative rounded-[17px] h-screen overflow-hidden mt-4 bg-black text-white pt-2">
      <Image
        src={bgImage}
        alt="Background"
        className="object-cover opacity-90"
        fill
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col justify-center h-full">
        <div className="mb-2 bg-white/20 text-[12px]  px-4 py-2 rounded-full w-fit backdrop-blur-sm">
          4+ Years in the market
        </div>

        <h1 className="text-4xl md:text-6xl font-thin  tracking-wide
  leading-tight">
          Smart Shipping <br /> Seamless Logistics
        </h1>

        <p className="text-lg  mt-2 max-w-xl text-white/90">
          With KM Logistics, experience seamless cargo transportation backed by
          unmatched service and dedication.
        </p>

        <div className="flex space-x-4 mt-3 text-white text-2xl">
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
        <div className="mt-5  absolute bottom-4 w-fit bg-white text-black p-3 rounded-3xl flex items-center gap-0 shadow-lg">
          <div className="flex">
            <Image
              src={img1}
              alt="Sea"
              width={120}
              height={50}
              className=" rounded-2xl  top-0 left-0 w-24 h-24 relative  object-cover "
            />
            <Image
              src={img2}
              alt="plane"
              width={120}
              height={50}
              className="rounded-2xl object-cover relative  top-0 right-7 w-24 h-24"
            />
            <Image
              src={img3}
              alt="truck"
              width={120}
              height={50}
              className="rounded-2xl relative object-cover right-12 w-24 h-24"
            />
          </div>
          <p className=" text-lg font-semibold">
            Enabling flawless logistics <br /> across the globe →
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
