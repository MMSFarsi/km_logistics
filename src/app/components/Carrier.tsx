import seaImage from "../../../public/Carrier/sea.png"
import airImage from "../../../public/Carrier/air.png"
import landImage from "../../../public/Carrier/land.png"
import Image from "next/image"
const Carrier = () => {
  return (
    <div className="bg-[#F7F0FA] pt-12 rounded-[15px]">
          <div className="mx-auto max-w-[700px] pb-20 text-center items-center justify-center flex flex-col">
             <button className="bg-white   hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-white  rounded-2xl shadow-sm">
          About Us
        </button>
        <p className="py-7 text-5xl">Seamless Cargo Transportation</p>
        <p className=" max-w-[500px] ">Explore the wide range of vehicles and transportation modes we operate to offer flexible, reliable logistics solutions.</p>
          </div>

          <div className="flex mx-auto items-center justify-center gap-2 pb-16">
            <Image src={seaImage} alt="sea" />
            <Image src={airImage} alt="sea" />
            <Image src={landImage} alt="sea" />
          </div>
    </div>
  )
}

export default Carrier