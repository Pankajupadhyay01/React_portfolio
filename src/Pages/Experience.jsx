import React from 'react'
import Heading from '../Component/Heading'
import Excards from '../Component/Excards'
import Exprience from '../data/Exprience'
const Experience = () => {
  return (
    <div id="experience" className='md:p-[60px]'>
      <Heading name="Experience" />
      <div className='flex md:flex-row flex-col w-[80%] justify-around items-center m-auto flex-wrap '>         
            <Excards/> 
      </div>
    </div>
  )
}

export default Experience
