import { React, useState, useEffect } from 'react';
import Heading from '../Component/Heading';
import list from '../data/Project_list'
import { all, react, html, js, python } from '../data/Project'
const Projects = () => {
    const [select, setselect] = useState("react");
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
        <div id="project">
            <Heading name={"Projects"} />
            <div className='flex justify-center my-[30px] text-xl list-none font-bold'>
                {
                    list.map(pro => (
                        <li key={pro.id} onClick={() => { setselect(pro.id) }} className={`mx-[10px] cursor-pointer p-[8px_10px] rounded-lg ${select == pro.id ? "text-blue-500" : "text-gray-800"} hover:text-blue-500`}>{pro.title}</li>
                    ))
                }
            </div>

            <div className='w-[80%] flex justify-center mx-auto'>

                <div className="w-full flex justify-center items-center flex-wrap">
                    {
                        data.map(pro => (

                            <div key={pro.title} className='flex flex-col justify-center items-center m-auto lg:w-[calc(25%-10px)] md:w-[calc(33%-10px)] flex-wrap'>
                                <div className="flex flex-col hover:scale-105 shadow-[10px_16px_10px_gray] hover:shadow-none my-[10px] text-center bg-[#ebad00] rounded-xl">
                                    <div className="w-full h-full overflow-hidden">
                                        <img className='w-full hover:scale-105 rounded-xl h-full' src={pro.img} alt="" />
                                    </div>
                                    <div className="text-[28px] text-[#4070f4]">
                                        {pro.title}
                                    </div>
                                </div>


                            </div>
                        ))
                    }


                </div>
            </div>


        </div>
    );
}

export default Projects;
