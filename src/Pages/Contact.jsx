import React from 'react';
import Heading from '../Component/Heading';
import Skill_bar from './Skill_bar';

const Contact = () => {
  const list = [
    {
      name: "logo-github",
      link: "https://github.com/Pankajupadhyay01"
    },
    {
      name: "logo-instagram",
      link: "https://www.instagram.com/"
    },
    {
      name: "logo-codepen",
      link: "https://codepen.io/Pankaj-Upadhyay-"
    },
    {
      name: "logo-linkedin",
      link: "https://www.linkedin.com/in/pankaj-upadhyay-a8b1b8214/"
    },
  ]
  return (
    <div id='contact' className='pt-[60px]'>
      <Heading name={"Have a Project ?"} />
      <div className='flex flex-col w-[80%] justify-center items-center m-auto my-[20px]'>
        <div className='text-lg md:text-xl text-center mb-[10px]'>
          I'm A Front End Web Developer / Web Designer With Expertise In HTML, CSS, JavaScript, JQuery, React Js, Tailwind, Bootstrap.
        </div>

       
        <div className='m-[5px,0] mb-[10px]'>
          <a href="src/assets/img6_.png" download>
            <button className='outline-none p-[5px_10px] rounded-[6px] text-[26px] text-white bg-[#4070f4] hover:bg-blue-500' >Let's Discuss</button>
          </a>
        </div>
        
         <div className='flex justify-center items-center '>
          {
            list.map(pro => (
              <li className='list-none mx-[10px] h-[40px] w-[40px] m-auto flex justify-center items-center rounded-[50%] bg-[#4070f4] hover:opacity-[.5] hover:bg-black'>
                <a href={pro.link} target="_blank">
                  <i className={`text-3xl flex justify-center text-center text-[white]`}><ion-icon name={pro.name}></ion-icon></i>
                </a>
              </li>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Contact;
