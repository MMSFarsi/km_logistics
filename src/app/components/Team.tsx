import { GoArrowUpRight } from "react-icons/go";
import team1 from "../../../public/team1.png";
import team2 from "../../../public/team2.png";

const Team = () => {
  return (
    <section>
      <div className="mx-auto mt-[98px] max-w-[700px] pb-20 text-center items-center justify-center flex flex-col">
        <button className="bg-white   hover:bg-gray-100 text-gray-800 font-semibold py-3 px-6    rounded-2xl shadow-xl">
          Meet the team
        </button>
        <p className="py-7 font-bold text-5xl">
          Get to Know{" "}
          <span className="text-black/25"> Our Delivery Experts </span>{" "}
        </p>
        <p className=" max-w-[550px] font-bold text-[16px] ">
          Skilled, reliable, and dedicated to delivering excellence every day.
        </p>
      </div>

      <div className="flex items-center gap-10 justify-center ">
        <div>
          <img src={team1.src} alt="" />
          <div className="flex text-xl mt-4  justify-between items-center">
            <p className="">Managing Director</p>
            <span className="bg-blue-300 rounded-full p-2">
              {" "}
              <GoArrowUpRight />
            </span>

          </div>
        </div>
        <div>
          <img src={team2.src} alt="" />
          <div className="flex text-xl mt-4  justify-between items-center">
            <p className="">Accountant</p>
            <span className="bg-blue-300 rounded-full p-2">
              {" "}
              <GoArrowUpRight />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
