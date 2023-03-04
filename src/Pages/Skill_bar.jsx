import React from 'react';

const Skill_bar = ({name,per,wid}) => {
    return (
        <div>
            <div className=" flex flex-col my-[10px]">

                <div className='flex text-bold justify-between items-center'>
                    <span>{name}</span>
                    <span>{per}</span>
                </div> 
                <div className={`rounded bg-gray-300 h-2 relative w-[100%] before:content-[''] before:bg-[#4070f4] before:absolute before:h-2 before:w-[${wid}%] before:left-0 before:top-0 before:rounded`} ></div>
           
            </div>

        </div>
    );
}

export default Skill_bar;
