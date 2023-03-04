import React from 'react';
import Heading from '../Component/Heading';
import Skills from '../data/Skills';
import Skill_bar from './Skill_bar';
const Skill = () => {
    return (
        <div id="skill">
            <Heading name={"Professionality"} />
            <div className='flex  justify-between w-[80%] m-auto my-[38px]'>
                <div className='w-[50%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum facilis soluta ipsum ex, facere sint ea possimus eveniet nesciunt asperiores, blanditiis voluptatibus harum, a neque. Nisi maiores molestiae quidem distinctio incidunt, iste pariatur ea nihil eligendi. Iure amet cumque et est qui fuga voluptatibus. Reprehenderit voluptatum distinctio in, asperiores quisquam temporibus quaerat corporis exercitationem. Sint iusto debitis totam autem possimus tempore obcaecati cupiditate incidunt molestiae nobis dignissimos, excepturi labore officia itaque a, ullam saepe qui cum laborum fuga. Veniam porro vero tenetur! Harum laborum praesentium temporibus, quam reprehenderit labore dolores! Fugit reprehenderit beatae animi exercitationem vero distinctio molestias saepe aut.</div>
                <div className='w-[45%]'>
                        {
                            Skills.map(pro => (
                              <Skill_bar key={pro.name} name={pro.name} per={pro.per} wid={pro.wid}/>
                            ))
                        }
                </div>
            </div>

        </div>

    );
}

export default Skill;
