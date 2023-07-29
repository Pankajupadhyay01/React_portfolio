import { React, useState, useEffect } from 'react';
import Heading from '../Component/Heading';
import list from '../data/Project_list'
import { all, react, html, js } from '../data/Project'
const Projects = () => {
    const [select, setselect] = useState("all");
    const [data, setdata] = useState([])
    useEffect(() => {
        switch (select) {
            case "all":
                setdata(all);
                break;
            case "react":
                setdata(react);
                break;
            case "html":
                setdata(html);
                break;
            case "js":
                setdata(js);
                break;
            default:
                setdata(all);
                break;
        }
    }, [select]);
    return (
        <div id="project" className='bg-[aliceblue] pt-[60px]'>
            <Heading name={"Projects"} />
            <div className='flex justify-center my-[30px] text-xl list-none font-bold flex-wrap'>
                {
                    list.map((pro, i) => (
                        <li key={i} onClick={() => { setselect(pro.id) }} className={`mx-[10px] cursor-pointer p-[8px_10px] rounded-lg ${select == pro.id ? "text-blue-500" : "text-gray-800"} hover:text-blue-500`}>{pro.title}</li>
                    ))
                }
            </div>
            <div className='flex w-[80%] justify-center items-center m-auto flex-wrap'>
                {
                    data.map((pro, i) => (
                        <div key={i} className='container my-[20px] bg-blue-500 overflow-hidden hover:shadow-[0_10px_20px_gray]  relative flex sm:w-[calc(50%-10px)] lg:w-[calc(33.33%-10px)] flex-col h-[30vh] justify-center border-gray border-[2px] m-auto rounded-3xl'>
                            <div className="img absolute ease-out duration-30 bg-black object-cover z-[1] w-[100%] h-[100%]">
                                <img className="w-[100%] h-[100%]" width={180} height={180} loading='lazy' src={pro.img} alt="project images" />
                            </div>
                            <a href={pro.link} target="_blank">
                                <div className="absolute bottom-0 flex justify-center items-center w-full  font-semibold">
                                    <div className='w-full flex justify-center text-white text-[20px] mx-[20px]'>{pro.title}</div>
                                </div>
                            </a>
                        </div>
                    ))
                }


            </div>
        </div>
    );
}

export default Projects;
