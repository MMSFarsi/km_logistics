import Image from "next/image";
import footerImg from "../../../public/footerimg.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative mt-[150px] h-[400px] text-white ">
    
      <div className="absolute inset-0 z-0">
        <Image
          src={footerImg}
          alt="Footer Background"
          fill
          className=" "
          priority
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-2">
        {/* Left Section */}
        <div>
          <h2 className="text-5xl md:text-3xl font-light mb-18">
            Smart Shipping Starts Here
          </h2>
          <div className="flex gap-4 mb-6">
            <button className="btn px-7 py-1 bg-[#0087DB] rounded-xl text-white font-bold">
            Get a Quote
          </button>
             <button className="btn px-7 py-1 text-white bg-transparent rounded-xl border-[#fffff] border  font-bold">
            View Map
          </button>
          </div>
          <div className="mt-7">
            <h3 className="font-bold text-2xl ">KM FAARNS Ltd</h3>
            <p className="text-[16px] font-medium mt-1">@2025 FAARNS. All rights reserved</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-start md:items-end justify-between h-full">
          <p className="max-w-md text-sm text-gray-200 text-right">
            At KM Logistics, we believe reliable service is the foundation of
            every successful delivery. Whether you have questions about our
            transport options, need a custom quote, or just want to connect—
            our team is always here to help.
          </p>

          <div className="flex gap-3 mt-6">
            <div className="bg-[#4588B3] p-2 rounded-md hover:scale-110 transition">
              <FaFacebookF />
            </div>
            <div className="bg-[#4588B3] p-2 rounded-md hover:scale-110 transition">
              <FaInstagram />
            </div>
            <div className="bg-[#4588B3] p-2 rounded-md hover:scale-110 transition">
              <FaXTwitter />
            </div>
            <div className="bg-[#4588B3] p-2 rounded-md hover:scale-110 transition">
              <FaLinkedinIn />
            </div>
          </div>
        

          <div className="flex items-center gap-3 mt-6">
           
            <a href="#" className="underline text-sm">
              Terms of Use
            </a>
            |
            <a href="#" className="underline text-sm">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
