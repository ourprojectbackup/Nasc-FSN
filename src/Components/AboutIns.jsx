import React from 'react'
import { AboutTheInstitution } from '../assets/Data'
import { VscDebugBreakpointData } from 'react-icons/vsc'
import { motion } from "framer-motion";
import TypingText from './TypingText';
const AboutIns = () => {
    return (
        <div className="border-b border-neutral-900 pb-20 mt-5 my-10 pt-7" >
            <motion.h1 initial={{opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:1}}} className="text-center text-4xl font-semibold mb-14">
                <TypingText text={"About the Institution"} /> </motion.h1>
            <div className="flex justify-center">
                <div className="grid gap-8 w-full px-4 sm:px-0">
                    {/* Layout for a triangular structure */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center mx-20">

                        <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }} className='flex'>

                            <div className="text-neutral-950 text-center tracking-tight flex items-center ">
                                <VscDebugBreakpointData size={30} className="flex-shrink-0 mr-2" />
                                <p className="text-justify">{AboutTheInstitution[0]}</p>
                            </div>
                        </motion.div>

                        <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }} className='flex'>

                            <div className="text-neutral-950 text-center tracking-tight flex items-center ">
                                <VscDebugBreakpointData size={30} className="flex-shrink-0 mr-2" />
                                <p className="text-justify"> {AboutTheInstitution[1]}</p>
                            </div>
                        </motion.div>

                    </div>

                    {/* Centered row for additional items */}
                    {AboutTheInstitution.length > 2 && (
                        <motion.div  initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }} className="grid grid-cols-1 place-items-center mt-8 mx-40 px-40">
                            {AboutTheInstitution.slice(2).map((data, index) => (
                                <div key={index} className="text-neutral-950 text-center tracking-tight flex items-center ">
                                    <VscDebugBreakpointData size={30} className="flex-shrink-0 mr-2" />
                                    <p className="text-justify"> {data}</p>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AboutIns
