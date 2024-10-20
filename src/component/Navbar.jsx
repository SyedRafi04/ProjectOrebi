import React, { useEffect, useState } from 'react'
import Container from './Layers/Container'
import Image from './Layers/Image'
import logo from '/assets/logo.png'
import Li from './Layers/Li'
import { FaBars, FaUser } from 'react-icons/fa'
import { RxCross2 } from "react-icons/rx";
import { IoMdArrowDropdown } from 'react-icons/io'
import { FaCartShopping } from 'react-icons/fa6'

const Navbar = () => {

  let [show, setShow] = useState(true)


  useEffect(() => {
    function resize() {
      if (window.innerWidth < 768) {
        setShow(false)
      } else {
        setShow(true)
      }
    }
    resize()
    window.addEventListener("resize", resize)
  }, [])

  return (
    <nav className='bg-white'>
      <Container className='py-4 flex justify-end items-center relative md:justify-center px-3 md:px-0 md:py-8'>
        <Image className='absolute left-0 pl-3 md:pl-0' href='/' src={logo} alt={logo} />

        <ul className={`bg-white Menu absolute gap-3 md:gap-10 flex flex-col border md:border-none md:static md:bg-transparent md:flex-row p-8 md:p-0 top-0  ${show ? " visible transform translate-x-0 transition-all duration-500" : " invisible  transform translate-x-full transition-all duration-500"}`}>

          <button onClick={() => setShow(!show)} className='mt-3 mr-3 top-0 right-0 absolute md:opacity-0 md:invisible'><RxCross2 /></button>
          <Li className='text-[#262626]' href='/home' LiContent='Home' />
          <Li href='/shop' LiContent='Shop' />
          <Li href='/about' LiContent='About' />
          <Li href='/contacts' LiContent='Contacts' />
          <Li href='/journal' LiContent='Journal' />
        </ul>

        <div onClick={() => setShow(!show)} className="md:hidden cursor-pointer flex gap-4">

          <div className="SearchBarIcon flex gap-4 md:gap-10 items-center">
            <div className='flex gap-[10px]'>
              <FaUser />
              <IoMdArrowDropdown />
            </div>

            <div>
              <FaCartShopping />
            </div>

          </div>
          
          <div>
            <FaBars />
          </div>


        </div>

      </Container>
    </nav>
  )
}

export default Navbar
