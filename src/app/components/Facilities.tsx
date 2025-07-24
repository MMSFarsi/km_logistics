import { GoArrowDownRight } from "react-icons/go";
import facilitiesImg from "../../../public/facilities/facilities.png";
import facilitiesImg1 from "../../../public/facilities/facilities2.png";
import facilitiesImg2 from "../../../public/facilities/facilities3.png";

const Facilities = () => {
  return (
    <section className="mt-16">
      {/* Text */}
      <div className="grid grid-cols-3 ">
        <div className="col-span-1">
          <button className="bg-white   hover:bg-gray-100 text-gray-800 font-semibold py-3 px-6    rounded-2xl shadow-xl">
            Facilities
          </button>
        </div>
        <div className="col-span-2">
          <p className="font-medium text-[35px] ">
            <span className=" mt-4 font-bold">Explore </span>
            <span className="text-black/25">
              Our Full Range of <br />
              <span className="text-black font-bold">Secure and Versatile</span>
              {} Container <br /> Facilities
            </span>
          </p>
        </div>
      </div>

      {/* Image Section */}

      <div className="mt-20 flex justify-center items-center gap-8">
        <div>
          <img
            src={facilitiesImg.src}
            alt="Services Image"
            className="w-[550px] h-[350px]"
          />
          <p className="mt-[25px] text-[25px] text-[#616161]">20 Foot</p>
          <div className="flex items-center justify-between ">
            <div>
              <p className="mt-[4px] text-2xl font-bold">
                $1200{" "}
                <span className="text-xs text-[#616161]] font-normal">
                  / Year
                </span>
              </p>
            </div>
            <div className="bg-blue-300 text-2xl rounded-full p-2">
              <GoArrowDownRight />
            </div>
          </div>
        </div>

        <div className="">
          <img
            src={facilitiesImg1.src}
            alt="Services Image"
            className="w-[550px] h-[350px]"
          />
          <p className="mt-[25px] text-[25px] text-[#616161]">40 Foot</p>
         <div className="flex items-center justify-between ">
            <div>
              <p className="mt-[4px] text-2xl font-bold">
                $1600{" "}
                <span className="text-xs text-[#616161]] font-normal">
                  / Year
                </span>
              </p>
            </div>
            <div className="bg-blue-300 text-2xl rounded-full p-2">
              <GoArrowDownRight />
            </div>
          </div>
        </div>
        <div className="">
          <img
            src={facilitiesImg2.src}
            alt="Services Image"
            className="w-[550px] h-[350px]"
          />
          <p className="mt-[25px] text-[25px] text-[#616161]">60 Foot</p>
         <div className="flex items-center justify-between ">
            <div>
              <p className="mt-[4px] text-2xl font-bold">
                $1800{" "}
                <span className="text-xs text-[#616161]] font-normal">
                  / Year
                </span>
              </p>
            </div>
            <div className="bg-blue-300 text-2xl rounded-full p-2">
              <GoArrowDownRight />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
