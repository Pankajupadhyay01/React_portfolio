import React from 'react';
import { TypeAnimation } from 'react-type-animation';
const Hero = () => {

    return (
        <div id='home' >
            <div className='pt-[9vh] lg:h-[100vh] bg-fixed flex flex-col-reverse md:flex-row justify-between bg-[aliceblue] m-auto '>

                <div className="flex flex-col leading-[initial] m-auto font-wrap text-center md:w-[60%] lg:w-[50%] w-full">
                    <div className='lg:text-[58px] md:text-[50px] sm:text-[45px] text-[32px] font-mediun'>
                        Hii It's Me
                    </div>

                    <div className='lg:text-[68px] md:text-[55px] text-[38px] sm:text-[55px] font-bold'>
                        <span className='text-[#ebad00] '>Pankaj </span> Upadhyay
                    </div>
                   
                      <div className='text-[#4070f4] my-[14px] md:text-[18px] text-[12px] font-bold'>
                      <TypeAnimation
                        sequence={[
                            "I'm a Devloper",
                            1000,
                            "I'm a Freelancer",
                            1000,
                            "I'm a UI/UX Designer",
                            1000,
                        ]}
                        speed={30} 
                        style={{ fontSize: '2em' }}
                        wrapper="span"
                        repeat={Infinity}
                    />
                    </div>
                   

                    <div className='m-[14px,0]'>
                    <a href="assets/Resume.pdf" download>
                            <button className='outline-none p-[8px_16px] rounded-[6px] text-[26px] text-white bg-[#4070f4] hover:bg-blue-500' >Hire me</button>
                        </a>
                    </div>

                </div>

                <div className=" mb-7 flex flex-col align-middle items-center w-[100%] md:w-[50%] overflow-hidden">
                    <div className="md:w-[95%]  sm:w-[59%] overflow-hidden w-[80%]  mx-[10px] m-auto rounded-[30%_70%_70%_30%_/_62%_69%_31%_38%] bg-[#ebad00] ">
                        <img className=' w-full h-full' src="/assets/img6_.png" loading='lazy' alt="" />
                    </div>
                </div>


            </div>


        </div>
    );
}

export default Hero;
