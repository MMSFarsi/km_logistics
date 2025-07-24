"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import seaImage from "../../../public/Carrier/sea.png";
import airImage from "../../../public/Carrier/air.png";
import landImage from "../../../public/Carrier/land.png";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

const Carrier = () => {
  return (
    <div className="bg-[#F7F0FA] pt-12 rounded-[15px]">
      <motion.div
        variants={fadeUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-[700px] pb-20 text-center items-center justify-center flex flex-col"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-6 border border-white rounded-2xl shadow-sm"
        >
          Carrier Options
        </motion.button>

        <motion.p className="py-7 text-5xl" transition={{ delay: 0.1 }}>
          Seamless Cargo Transportation
        </motion.p>
        <motion.p
          className="max-w-[500px]"
          transition={{ delay: 0.2 }}
        >
          Explore the wide range of vehicles and transportation modes we operate
          to offer flexible, reliable logistics solutions.
        </motion.p>
      </motion.div>

  
      <div className="flex mx-auto items-center justify-center gap-4 pb-16 flex-wrap">
        {[seaImage, airImage, landImage].map((img, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="shadow-lg rounded-xl overflow-hidden"
          >
            <Image className="w-fit h-[230px]" src={img} alt="Carrier" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Carrier;
