import React from 'react'
import { GiMoebiusTrefoil } from "react-icons/gi";
import { RiCloseFill } from "react-icons/ri";
import { RiMenu3Line } from "react-icons/ri";


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

          <div className="hidden md:flex space-x-4 items-center">
            <a href="#" className='hover:text-neutral-200'>Login</a>
            <a href="#" className='border border-neutral-700 text-white py-2 px-4 rounded-lg hover:bg-neutral-700 trasition duration-300'>
              Get Started
            </a>
            <a href="#" className='bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 trasition duration-300'>
              Start Free Trial
            </a>
          </div>

          {/* Hamburger menu untuk icons */}
          <div className="md:hidden fokus:outline-none">
            {/* Ketika tombol diklik:
                      Fungsi toggleMenu dipanggil, yang mengubah nilai isOpen.
                            Jika isOpen = true, ikon "Close" muncul.
                            Jika isOpen = false, ikon "Menu" muncul. */}
            <button className='text-white' onClick={toggleMenu}                  
            aria-label={isOpen ? "Close Menu" : "Open Menu"}> 
             { isOpen ? <RiCloseFill /> : <RiMenu3Line /> }                                      
           </button>                                                                               
                                                                                                                                                                                                   
          </div>
      </div>


      {/* ukuran mobile */}
      {isOpen && (
        <div className="md:hidden bg-neutral-900/60 backdrop-blur-md border border-neutral-800 p-4 rounded-xl mt-2 ">
          <div className="flex flex-col space-y-4">
            <a href="#" className='hover:text-neutral-200 '>
              Producks
            </a>
            <a href="#" className='hover:text-neutral-200 '>
              Pricing
            </a>
            <a href="#" className='hover:text-neutral-200 '>
              Resources
            </a>
            <a href="#" className='hover:text-white '>
              Login
            </a>
            <a href="#" className='border border-neutral-700 text-white py-2 px-4 rounded-lg hover:bg-neutral-700 trasition duration-300'>
              Get Started
            </a>
            <a href="#" className='bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 trasition duration-300'>
              Start Free Trial
            </a>
          </div>
            
        </div>
      ) }

      
    </nav>
  )
}

export default Navbar
