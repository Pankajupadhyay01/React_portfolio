import React from 'react'
import Heading from '../Component/Heading';
const About = () => {
  return (
    <div id="about" className='pt-[60px] md:pt-[65px]'>
      <Heading name={"About Me"} />
      <div className='flex flex-col-reverse lg:flex-row m-[40px_auto] md:w-[95%] w-[85%] lg:w-[92%] justify-between'>
        <div className='lg:w-[45%] flex  justify-center'>
          <img className='w-[400px] h-[400px] rounded-3xl object-cover' src="assets/img6.jpeg" srcset="/assets/img6.jpeg" width={180} height={180} loading='lazy' alt="My image bg" />
        </div>
        <div className='lg:w-[55%] text-black capitalize font-semibold text-xl text-justify flex flex-wrap m-auto align-middle'>


          <p> Hii, This is pankaj Upadhyay. I'm from Uttrakhand.I'm a Front end web developer / Web Designer with expertise in HTML, CSS, JavaScript, jQuery, React js, Tailwind, Bootstrap. I specialize in creating Pixel-Perfect custom websites and web applications that are both user-friendly and visually stunning.</p>

          <p className='my-[20px] md:block hidden'>Apart from web devlopment Skill i can also code in core programming language like Python, Java, C++, C, etc</p>

        <p className=' md:block hidden'>I'm passionate about helping my clients achieve their goals through effective web development, and I'm always eager to take on new projects.</p>  
          
        </div>
      </div>
    </div>
  );
}

export default About;
