
import { motion } from "framer-motion";
import React from 'react'
import { AboutSoLSData } from '../assets/Data'
import { VscDebugBreakpointData } from 'react-icons/vsc'

const AboutSoLS = () => {
    return (
        <div className="border-b border-neutral-900 pb-20 mt-5 my-10 pt-7">
            <motion.h1 initial={{opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:1}}} className="text-center text-4xl font-semibold mb-14">About School of Life Sciences</motion.h1>
            <div className="flex justify-center">
                <div className="grid gap-8 w-full px-4 sm:px-0">
                    {/* Layout for a triangular structure */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center mx-20">
                       
                            <div className='flex'>

                                <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}     className="text-neutral-950 text-center tracking-tight flex items-center ">
                                    <VscDebugBreakpointData size={30} className="flex-shrink-0 mr-2" />
                                    <p> {AboutSoLSData[0]}</p>
                                </motion.div>
                            </div>

                             <div className='flex'>

                                <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}     className="text-neutral-950 text-center tracking-tight flex items-center ">
                                    <VscDebugBreakpointData size={30} className="flex-shrink-0 mr-2" />
                                    <p> {AboutSoLSData[0]}</p>
                                </motion.div>
                            </div>
                  
                    </div>

                    {/* Centered row for additional items */}
                    {AboutSoLSData.length > 2 && (
                        <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }} className="grid grid-cols-1 place-items-center mt-8 mx-40 px-40">
                            {AboutSoLSData.slice(2).map((data, index) => (
                                <div key={index} className="text-neutral-950 text-center tracking-tight flex items-center ">
                                    <VscDebugBreakpointData size={30} className="flex-shrink-0 mr-2" />
                                    <p> {data}</p>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AboutSoLS
