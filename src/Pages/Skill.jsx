import React from 'react';
import Heading from '../Component/Heading';
import Skills from '../data/Skills';
const Skill = () => {
    return (
        <div>
            <Heading name={"Professionality"} />
            <div>
                <div></div>
                {
                    Skills.map(pro => (
                        <div key={pro.name} className="my-[10px] w-full ">
                            <div className='flex justify-between items-center'>
                                <span>{pro.name}</span>
                                <span>{pro.per}</span>
                            </div>
                            <div className={`bg-gray-300 h-2 relative w-full before:content-['_'] before:bg-red-500 before:w-[${pro.wid}%] before:absolute before:h-2`} ></div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
}

export default Skill;
