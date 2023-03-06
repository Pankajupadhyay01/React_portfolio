import React from 'react';
import Heading from '../Component/Heading';
import Skills from '../data/Skills';
import Skill_bar from './Skill_bar';
const Skill = () => {
    return (
        <div id="skill">
            <Heading name={"Professionality"} />
            
                <div className='w-[80%] flex m-auto mt-[40px]'>
                    <div className='container gap-y-[20px] w-full flex items-center flex-wrap'>
                       {
                        Skills.map(pro=>(
                        <Skill_bar key={pro.name} name={pro.name} bg={pro.bg} img={pro.img}/>

                        ))}
                    </div>
                </div>

        </div>

    );
}

export default Skill;
