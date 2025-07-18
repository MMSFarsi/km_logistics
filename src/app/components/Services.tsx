import ServicesImg from "../../../public/Services/servicesImg1.png"

const Services = () => {
  return (
   <section className="mt-16">
    {/* Text */}
    <div className="flex gap-[370px]">
         <div>
             <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-white  rounded-2xl shadow-sm">
          Our Services
        </button>
         </div>
        <p className="font-medium text-[35px] "><span className=" mt-4 font-bold">Services that simplify</span><span className="text-gray-300"> shipping, <br /> enhance efficiency, and support <br /> your business at every stage. </span>  </p>
    </div>

    {/* Image Section */}

    <div className="mt-20 flex justify-center items-center gap-8 ">
        <div className="">
            <img src={ServicesImg.src} alt="Services Image" className="w-[550px] h-[350px]" />
            <p className="mt-[45px] text-2xl font-bold">Freight Forwarding</p>
            <p className="mt-[15px] ext-[20px]">Freight Forwarding</p>
        </div>
        <div className="">
            <img src={ServicesImg.src} alt="Services Image" className="w-[550px] h-[350px]" />
            <p className="mt-[45px] text-2xl font-bold">Freight Forwarding</p>
            <p className="mt-[15px] ext-[20px]">Freight Forwarding</p>
        </div>
        <div className="">
            <img src={ServicesImg.src} alt="Services Image" className="w-[550px] h-[350px]" />
            <p className="mt-[45px] text-2xl font-bold">Freight Forwarding</p>
            <p className="mt-[15px] ext-[20px]">Freight Forwarding</p>
        </div>
      
      
    
       
    </div>
   </section>
  )
}

export default Services