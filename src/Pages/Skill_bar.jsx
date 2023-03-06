import React from 'react';
const Skill_bar = ({ name, img, bg}) => {

  return (
    <>
      <div className='flex justify-center md:w-[calc(33.33%-10px)] lg:w-[calc(25%-10px)] hover:scale-105 items-center m-auto flex-wrap'>

        <div className={`mr-[23px] my-[30px] w-[230px] h-[200px]  bg-[${bg}] flex flex-col items-center relative before:bg-[white] before:absolute before:content-[''] before:h-[40px] before:w-full `}>

          <div className="w-[100px] h-[100px] z-[99] rounded-[50%] bg-[white] p-1 overflow-hidden bg-contain ">

            <img className='w-full h-full rounded-[50%] bg-slate-600' src={img} alt="" />

          </div>

          <div className='flex flex-col m-auto leading-[inherit] text-center text-black font-semibold'>

            <div className="text-[25px]">{name}</div>
           </div>
        </div>
      </div>
    </>
  );
}

export default Skill_bar;
