import React, { useState } from 'react';
import Nav from '../data/Nav';
import { Link } from 'react-scroll';
const Navbar = () => {
    const [nav, setnav] = useState(false);
    const [sticky, setsticky] = useState(false);
    
    const func = () => {
        setnav(!nav)
        if (!nav) {
            document.body.style.overflow = "hidden"
        }
        else {
            document.body.style.overflow = "auto"

        }
    }

    const setcolor = () => {
        if (window.scrollY >= 80) {
            setsticky(true);
        } else {
            setsticky(false);
        }
    }

    window.addEventListener('scroll', setcolor);
    return (
        <div>
            <nav className={`fixed z-[999] transition-all delay-200 ease-linear w-full p-[8px_20px] md:p-[30px_20px] ${sticky || nav ? "bg-[#4070f4]" : "bg-[aliceblue]"} `}>
                <div className="flex justify-between md:m-[0_27px] align-middle  items-center ">

                    <div className={`md:text-[20px] text-[25px] ${sticky ? "hover:text-[white]" : "hover:text-[#4070f4]"} m-auto md:hidden font-semibold text-[#ebad00]`}>Portfolio.</div>

                    <div onClick={func} className={`md:hidden text-[4vh] font-semibold flex mr-[10px] ${nav || sticky ? "text-white" : "text-[#4070f4]"}`}>
                        <ion-icon name={nav ? "close" : "menu"}></ion-icon>
                    </div>

                    <div className={`transition-all ease-linear delay-[0.3] md:flex cursor-pointer list-none md:static absolute top-0 items-center text-center md:w-full md:justify-center  w-[70%] bg-[#4070f4] h-[100vh] md:h-0 md:left-[0%] md:text-[20px] text-[20px] ${nav ? "left-[0%]" : "left-[-100%]"} ${nav || sticky ? "text-white" : "text-black"}`}>
                        {
                            Nav.map((pro, i) => (
                                <li key={i} className='md:m-[0_20px] m-[10px]  font-bold my-9 hover:text-[#ebad00]'><Link activeClass="active" to={pro.link} spy={true} smooth={true} offset={-90} duration={500}>{pro.name}</Link></li>
                            ))
                        }
                    </div>


                </div>
            </nav>
        </div>
    );
}

export default Navbar;
