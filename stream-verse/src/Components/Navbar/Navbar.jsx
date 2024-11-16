import React from 'react'
import { GiMoebiusTrefoil } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);  // membuat variable isOpen dengan nilai awal false dan 
                                                        //nilainya akan di perbarui dengan setIsOpen

  const toggleMenu = () => {
    setIsOpen(!isOpen);             // operator ! (NOT) membalikkan nilai isOpen, jika nilai awal isOpen false, makan akan di ubah mnjdi True
                                    // Ketika tombol diklik, fungsi toggleMenu dipanggil, yang mengubah nilai isOpen.
  }                                                          

  return (
    <nav className='fixed top-4 left-0 right-0 z-50 m-2'>
      <div className="text-neutral-500 bg-black/60 backdrop-blur-md max-w-7xl mx-auto px-4 py-3 flex justify-between items-center rounded-xl 
      border border-neutral-500 ">
        <h1 className='font-bold text-white flex items-center gap-2'>
          <GiMoebiusTrefoil className='text-2xl'/>StreamVerse
          </h1>        

          <div className="hidden md:flex space-x-6">
            <a href="#work " className='hover:text-neutral-200'>
              How it works
            </a>
            <a href="#work " className='hover:text-neutral-200'>
              Pricing
            </a>
            <a href="#work " className='hover:text-neutral-200'>
              Testimonials
            </a>
          </div>


      </div>
      
    </nav>
  )
}

export default Navbar
