const Performance = () => {
  return (
    <section className="mt-7">
      <div className="mx-auto max-w-[700px] pb-20 text-center items-center justify-center flex flex-col">
        <button className="bg-[#FFCACA]   hover:bg-gray-100 text-gray-800 font-semibold py-3 px-6 border border-[#838080]  rounded-2xl shadow-sm">
          Key Matrics
        </button>
      </div>

      <div className="grid grid-cols-2 mt-6 border-b border-[#838080] mx-auto max-w-[1200px]">
        <div className="grid-cols-1 ">
          <div className="border-b border-r border-[#838080] pb-4 pr-4">
            <h1 className="text-[36px]">Performance That Speaks for Itself</h1>
            <p className="mt-[42px] mb-8 ">
              Our numbers reflect years of consistent service, satisfied
              clients, and successful deliveries nationwide.
            </p>
          </div>

         <div className=" border-r border-[#838080] pb-7 pt-3 pr-4">
           <h3 className="text-[44px] font-extrabold text-black">1050+</h3>
          <p className="text-xl text-[#0087DB] font-semibold">Happy Clients</p>
          <p className="text-[18px] text-[#616161] mt-4">
            Businesses across sectors trust us for dependable logistics and
            lasting partnerships.
          </p>
         </div>
        </div>

        <div className="grid-cols-1">
          <div className="pl-[60px] border-b mb-4 border-[#838080] pb-4 pr-4">
           
            <h3 className="text-[44px] font-extrabold text-black">225+</h3>
            <p className="text-xl text-[#0087DB] font-semibold ">Skilled Experts</p>
            <p className="mt-2 text-[#838080] ">
              Our experienced team brings deep industry knowledge and precision to every shipment.
            </p>
          </div>
          <div className="pl-[60px] pt-5 mt-4">
            
            <h3 className="text-[44px] font-extrabold text-black">950+</h3>
            <p className="text-xl text-[#0087DB] font-semibold">Completed Projects</p>
            <p className="mt-2 text-gray-600">
              From local hauls to nationwide distribution, we deliver with consistency and care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance;
 