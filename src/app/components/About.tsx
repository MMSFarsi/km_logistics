import Image from "next/image";
import aboutImg1 from "../../../public/aboutimg1.png";
import aboutImg2 from "../../../public/aboutimg2.png";

const About = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 py-16">
      <div>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-white  rounded-2xl shadow-sm">
          About Us
        </button>
        <h2 className="text-5xl mt-4 font-bold">
          Trusted & Faster
          <span className="text-black/25"> Logistic Service Provider</span>
        </h2>
        <h3 className="mt-14">
          KM Logistics Limited is a trusted and reliable logistics company with
          4 years of combined industry experience. We provide professional
          trucking services across Canada, prioritizing honesty, integrity, and
          customer satisfaction—values often overlooked in today’s transport
          industry. At KM Logistics, we specialize in exceptional customer care,
          delivering friendly, knowledgeable service to every client and
          partner.
        </h3>
        <div className="flex mt-14 gap-2">
          <button className="btn bg-[#0087DB] rounded-xl text-white font-bold">
            Get a Quote
          </button>
          <button className="btn bg-white rounded-xl border-[#000000] border text-[#616161] font-bold">
            Explore More
          </button>
        </div>
      </div>

      <div className="flex gap-4 items-center justify-center">
        <div className="row-span-2 col-span-2">
          <Image src={aboutImg1} alt="About Image"  className=" h-fit object-cover " />
        </div>

        <div className="flex flex-col justify-center items-center gap-2">
          <Image src={aboutImg2}  alt="About Image" className=" h-fit object-cover"  />
          <Image  src={aboutImg2} alt="About Image" className=" h-fit object-cover"/>
        </div>
      </div>
    </section>
  );
};

export default About;
