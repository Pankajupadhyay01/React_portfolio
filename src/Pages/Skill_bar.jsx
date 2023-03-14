import React from 'react';
const Skill_bar = ({ name, img}) => {

  return (
    <>
      <div className='flex justify-center md:w-[calc(33.33%-10px)] hover:translate-y-[-10px] lg:w-[calc(25%-10px)] items-center m-auto flex-wrap'>

        <div className={` my-[30px] w-[230px] h-[200px] bg-[linear-gradient(45deg,#4070f3,#65cdff)] flex mx-auto flex-col items-center relative before:bg-[aliceblue] before:absolute before:content-[''] before:h-[40px] before:w-full before:outline-none`}>

          <div className="w-[100px] h-[100px] hover:scale-105 z-[99] rounded-[50%] bg-[aliceblue] p-1 overflow-hidden bg-contain ">

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


{/*bg-[linear-gradient(45deg,#4070f3,#65cdff)]*/}