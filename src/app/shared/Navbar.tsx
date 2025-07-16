import React from 'react'

const Navbar = () => {
  return (
    <div className="absolute m-8 mt-4 top-0 left-0 w-[95%] z-20">
      <section className="grid rounded-4xl grid-cols-3 justify-center items-center px-10 shadow-xl bg-white mx-10 mt-5">
        <div className="grid-cols-1 font-bold">
          <ul className="menu menu-horizontal px-1">
            <li className=' border-b-2'><a>HOME</a></li>
            <li><a>SERVICES</a></li>
            <li><a>ABOUT</a></li>
          </ul>
        </div>
        <div className="grid-cols-1 flex justify-center items-center">
          <img className="h-15 w-15" src="https://i.ibb.co/qLcSxSQL/kmlogo.png" alt="Logo" />
        </div>
        <div className="grid-cols-1 flex justify-end items-center">
          <button className="btn bg-blue-500 rounded-xl text-white font-bold">Get a Quote</button>
        </div>
      </section>
    </div>
  );
};


export default Navbar