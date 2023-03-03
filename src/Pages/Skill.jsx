import React from 'react';
import Heading from '../Component/Heading';
import Skills from '../data/Skills';
const Skill = () => {
    return (
        <div>
            <Heading name={"Professionality"} />
            <div>
                {
                    Skills.map((pro) => (
                        <div className='flex'>
                            <div>{pro.name}</div>
                            <div className='w-full block h-11 items-center bg-gray-200'> 
                           
                                <div className='bg-black w-[90%] h-11 '> <span className='float-right text-white'>80%</span></div>
                            </div>
                        </div>
                    ))
                }



            </div>
        </div>
    );
}

export default Skill;
