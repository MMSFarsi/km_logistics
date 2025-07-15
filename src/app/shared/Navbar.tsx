import React from 'react'

const Navbar = () => {
  return (
    <section className='grid  rounded-4xl grid-cols-3 justify-center items-center mt-10 mx-10 h-20 px-10 shadow-xl bg-white'>
        <div className='grid-cols-1 font-bold '>
              <ul className="menu menu-horizontal px-1">
      <li><a>HOME</a></li>
      <li><a>SERVICES</a></li>
      <li><a>ABOUT</a></li>
    </ul>
        </div>
        <div className='grid-cols-1 flex justify-center items-center'>
            <img className='h-20 w-20' src="https://i.ibb.co/qLcSxSQL/kmlogo.png" alt="" />
        </div>
        <div className='grid-cols-1 flex justify-end items-center'>
            <button className='btn bg-blue-400 rounded-xl text-white text-bold  '>Get a Quote</button>
        </div>

    </section>
  )
}

export default Navbar