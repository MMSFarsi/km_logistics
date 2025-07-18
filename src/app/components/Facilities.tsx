import facilitiesImg from "../../../public/facilities/facilities.png";
import facilitiesImg1 from "../../../public/facilities/facilities2.png";
import facilitiesImg2 from "../../../public/facilities/facilities3.png";

const Facilities = () => {
  return (
    <section className="mt-16">
      {/* Text */}
      <div className="flex gap-[390px]">
        <div>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-white  rounded-2xl shadow-sm">
            Facilities
          </button>
        </div>
        <p className="font-medium text-[35px] ">
          <span className=" mt-4 font-bold">Explore</span>
          <span className="text-gray-300">
            {" "}
            Our Full Range of <br />
            <span className="text-black font-bold">
              Secure and Versatile
            </span>{" "}
            Container <br /> Facilities{" "}
          </span>{" "}
        </p>
      </div>

      {/* Image Section */}

      <div className="mt-20 flex justify-center items-center gap-8">
        <div className="">
          <img
            src={facilitiesImg.src}
            alt="Services Image"
            className="w-[550px] h-[350px]"
          />
          <p className="mt-[25px] text-[25px] text-[#616161]">20 Foot</p>
          <p className="mt-[4px] text-2xl font-bold">
            $1200{" "}
            <span className="text-xs text-[#616161]] font-normal">/ Year</span>
          </p>
        </div>
        <div className="">
          <img
            src={facilitiesImg1.src}
            alt="Services Image"
            className="w-[550px] h-[350px]"
          />
          <p className="mt-[25px] text-[25px] text-[#616161]">20 Foot</p>
          <p className="mt-[4px] text-2xl font-bold">
            $1200{" "}
            <span className="text-xs text-[#616161]] font-normal">/ Year</span>
          </p>
        </div>
        <div className="">
          <img
            src={facilitiesImg2.src}
            alt="Services Image"
            className="w-[550px] h-[350px]"
          />
          <p className="mt-[25px] text-[25px] text-[#616161]">20 Foot</p>
          <p className="mt-[4px] text-2xl font-bold">
            $1200{" "}
            <span className="text-xs text-[#616161]] font-normal">/ Year</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
