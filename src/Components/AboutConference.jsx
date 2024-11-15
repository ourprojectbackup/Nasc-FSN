
import React from 'react'
import { AbouttheConference, Objectives,Themes,TargetAudiences,Features } from '../assets/Data'
import { VscDebugBreakpointData } from 'react-icons/vsc'
import { motion } from "framer-motion";

const AboutConference = () => {
    return (
        <div className="border-b border-neutral-900 pb-20 mt-5 my-10 pt-7">
            <motion.h1 initial={{opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:1}}} className="text-center text-4xl font-semibold mb-14">About the Conference</motion.h1>
            <div className="flex justify-center">
                <div className="grid gap-8 w-full px-4 sm:px-0 items-center justify-center">
                    {/* Layout for a triangular structure */}
                    <div className="grid grid-cols-1 sm:grid-cols-1 gap-8 text-center mx-20 max-w-4xl">
                        {AbouttheConference.slice(0, 2).map((data, index) => (
                            <div className='flex'>

                                <motion.div  initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }} key={index} className="text-neutral-950 text-center tracking-tight flex items-center ">
                                    <VscDebugBreakpointData size={30} className="flex-shrink-0 mr-2" />
                                    <p className="text-justify"> {data}</p>
                                </motion.div>
                            </div>
                        ))}
                    </div>


                </div>
            </div>

            <motion.h2  initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }} className="text-start text-3xl font-semibold underline mx-40 pt-20">Objectives</motion.h2>
            <div className='mx-40 pl-11'>
                {Objectives.map((obj, index) => (
                    <motion.div   initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { duration: 1.3 } }}  key={index} className='my-5 flex flex-wrap'>
                        <p className='leading-tight'> <span className='font-bold'>{index + 1}. {obj.title} - </span> <span>{obj.desc}</span> </p>
                    </motion.div>
                ))}
            </div>

            <motion.h2 initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}  className="text-start text-3xl font-semibold underline mx-40 pt-20">Themes</motion.h2>
            <div className='mx-40 pl-11'>
                {Themes.map((theme, index) => (
                    <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}  key={index} className='my-5 flex'>
                        <motion.p  className='leading-tight mr-1'> <span className='font-bold'>{index + 1}.    </span>{theme     }</motion.p>
                        </motion.div>
                ))}
            </div>   

            <motion.h2 initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }} className="text-start text-3xl font-semibold underline mx-40 pt-20">Target Audience</motion.h2>
            <div className='mx-40 pl-11'>
                {TargetAudiences.map((theme, index) => (
                    <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { duration: 1.3 } }} key={index} className='my-5'>
                        <p className='leading-tight'> <span className='font-bold'>{index + 1}.  {theme     }</span></p>
                    </motion.div>
                ))}
            </div> 

            <motion.h2 initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }} className="text-start text-3xl font-semibold underline mx-40 pt-20">The Conference will Feature</motion.h2>
            <div className='mx-40 pl-11'>
                {Features.map((theme, index) => (
                    <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { duration: 1.3 } }} key={index} className='my-5'>
                        <p className='leading-tight'> <span className='font-bold'>{index + 1}.  {theme     }</span></p>
                    </motion.div>
                ))}
            </div> 
        </div>
    )
}

export default AboutConference
