import ServicesImg from "../../../public/Services/servicesImg1.png"
import ServicesImg2 from "../../../public/Services/servicesImg2.png"
import ServicesImg3 from "../../../public/Services/servicesImg3.png"

const Services = () => {
  return (
   <section className="mt-16">
    <div className="grid grid-cols-3 ">
         <div className="col-span-1">
            <button className="bg-white   hover:bg-gray-100 text-gray-800 font-semibold py-3 px-6    rounded-2xl shadow-xl">
          Our Services
        </button>
         </div>
        <div className="col-span-2">
            <p className="font-medium text-[35px] "><span className=" mt-4 font-bold">Services that simplify</span><span className="text-black/25"> shipping, <br /> enhance efficiency, and support <br /> your business at every stage. </span>  </p>
        </div>
    </div>


    <div className="mt-20 flex justify-center items-center gap-8 ">
        <div className="">
            <img src={ServicesImg2.src} alt="Services Image" className="w-[600px] h-[280px]" />
            <p className="mt-[45px] text-2xl font-bold">Freight Forwarding</p>
            <p className="mt-[15px] ext-[20px]">Freight Forwarding</p>
        </div>
        <div className="">
            <img src={ServicesImg.src} alt="Services Image" className="w-[600px] h-[280px]" />
            <p className="mt-[45px] text-2xl font-bold">Freight Forwarding</p>
            <p className="mt-[15px] ext-[20px]">Freight Forwarding</p>
        </div>
        <div className="">
            <img src={ServicesImg3.src} alt="Services Image" className="w-[600px] h-[280px]" />
            <p className="mt-[45px] text-2xl font-bold">Freight Forwarding</p>
            <p className="mt-[15px] ext-[20px]">Freight Forwarding</p>
        </div>
      
      
      
    
       
    </div>
   </section>
  )
}

export default Services