import React from 'react'
import Container from './Layers/Container'
import { HiMiniBars2 } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";


const Searchbar = () => {
  return (
    <div className='bg-[#F5F5F3] '>
      <Container className='py-[40px] font-sans text-sm flex justify-between'>
        <div className="ShopByCategory pl-3 md:pl-0 flex items-center gap-2">
          <HiMiniBars2 />
          <p className='hidden md:block'>Shop By Category</p>
        </div>

        <div className="SearchBar flex relative">
          <input className='py-4 px-5 md:w-[600px] w-[300px] boarder-none outline-none' type="text" placeholder='Search Products' />
          <FaSearch className='absolute top-1/2 -translate-y-1/2 right-5' />
        </div>
        <div className="SearchBarIcon flex gap-10 items-center">
          <div className='flex gap-[10px]'>
            <FaUser />
            <IoMdArrowDropdown />
          </div>

          <div>
            <FaCartShopping />
          </div>

        </div>

      </Container>
    </div>
  )
}

export default Searchbar
