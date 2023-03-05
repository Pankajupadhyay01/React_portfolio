import React from 'react';
import Heading from '../Component/Heading';
import Skills from '../data/Skills';
import Skill_bar from './Skill_bar';
const Skill = () => {
    return (
        <div id="skill">
            <Heading name={"Professionality"} />
            {/* <div className='flex  justify-between w-[80%] m-auto my-[38px]'> */}
            
                <div className='w-[80%] flex m-auto mt-[40px]'>
                    <div className='container gap-y-[20px] w-full flex items-center flex-wrap'>
                       {
                        Skills.map(pro=>(
                        <Skill_bar name={pro.name} outof={pro.outof} per={pro.per} img={pro.img}/>

                        ))}
                    </div>
                </div>
            {/* </div> */}

        </div>

    );
}

export default Skill;
