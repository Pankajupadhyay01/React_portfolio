import { React, useState, useEffect } from 'react';
import Heading from '../Component/Heading';
import list from '../data/Project_list'
import { all, react, html, js, python } from '../data/Project'
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
            case "python":
                setdata(python);
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
                    list.map(pro => (
                        <li key={pro.id} onClick={() => { setselect(pro.id) }} className={`mx-[10px] cursor-pointer p-[8px_10px] rounded-lg ${select == pro.id ? "text-blue-500" : "text-gray-800"} hover:text-blue-500`}>{pro.title}</li>
                    ))
                }
            </div>

            <div className='w-full md:w-[80%] flex justify-center mx-auto mb-[40px]'>

                <div className="w-full flex justify-center items-center flex-wrap">
                    {
                        data.map(pro => (

                            <div key={pro.title} className='w-fulll flex flex-col justify-center items-center m-auto md:w-[calc(33.33%-10px)] flex-wrap'>

                                <a href={pro.link} target="_blank">
                                    <div className="flex w-full h-[41vh] flex-col hover:scale-105 shadow-[10px_16px_10px_gray] hover:shadow-none my-[10px] text-center bg-[linear-gradient(45deg,#4070f3,#65cdff)] rounded-xl">


                                        <img className='w-full overflow-hidden rounded-xl h-full' src={pro.img} alt="" />


                                        <div className="text-[28px] text-white">
                                            {pro.title}
                                        </div>

                                    </div>
                                </a>

                            </div>
                        ))
                    }


                </div>
            </div>


        </div>
    );
}

export default Projects;
