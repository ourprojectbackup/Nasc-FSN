import React from 'react'
import img1 from "../assets/Picture1.jpg"
import img2 from "../assets/Picture2.jpg"
import { motion } from "framer-motion";
import TypingText from './TypingText';




const Header = () => {
    return (
        <motion.div >
            {/* Header with College Information */}
            <div className="border-b border-neutral-900 pb-1 pt-8">
                <div className="flex flex-wrap justify-evenly items-center">
                    {/* Left Image */}
                    <motion.div initial={{opacity:0}} animate={{y:0,opacity:1,transition:{duration:1,delay:1.2}}}  className="ml-5 mt-4 sm:mt-6 md:mt-10 flex justify-center">
                        <img src={img1} alt="College Logo" className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28" />
                    </motion.div>
                    {/* Text Information */}
                    <div className="text-center max-w-3xl px-4">
                        <motion.p initial={{y:-100,opacity:0}} animate={{y:0,opacity:1,transition:{duration:1}}} className="text-xl sm:text-2xl md:text-3xl font-bold">NEHRU ARTS AND SCIENCE COLLEGE</motion.p>
                        <motion.p initial={{x:-200,opacity:0}} animate={{x:0,opacity:1,transition:{duration:1,delay:0.5}}} className="mt-1 text-sm sm:text-base font-semibold">(AUTONOMOUS)</motion.p>
                        <motion.p initial={{x:200,opacity:0}} animate={{x:0,opacity:1,transition:{duration:1,delay:0.7}}} className="mt-2 text-xs sm:text-sm md:text-base tracking-tight leading-1">
                            (Affiliated to Bharathiar University Reaccredited with “A+” Grade by NAAC, ISO 9001:2015 (QMS) Certified, 
                            Recognized by UGC with 2(f) & 12(B), Under Star College Scheme by DBT, Govt. of India)
                            <br />
                            Nehru Gardens, Thirumalayampalayam, Coimbatore - 641 105, Tamil Nadu, India.
                        </motion.p>
                        <motion.p initial={{x:-200,opacity:0}} animate={{x:0,opacity:1,transition:{duration:1,delay:1.2}}} className="text-xs sm:text-sm text-center mt-2">
                            E-mail: <a href="#" className="text-blue-600 underline">nascoffice@nehrucolleges.com</a> &nbsp;|&nbsp; 
                            Web Site: <a className="text-blue-600 underline" href="#">www.nehrucolleges.net</a>
                        </motion.p>
                    </div>
                    {/* Right Image */}
                    <motion.div initial={{opacity:0}} animate={{y:0,opacity:1,transition:{duration:1,delay:1.2}}}  className="mr-5 mt-4 sm:mt-6 md:mt-10 flex justify-center">
                        <img src={img2} alt="College Logo 2" className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28" />
                    </motion.div>
                </div>
            </div>

            {/* Conference Title */}
            <div className="flex flex-wrap justify-center my-10 pt-7 px-4">
                <motion.p initial={{opacity:0,y:200}} animate={{y:0,opacity:1,transition:{duration:1,delay:1.3}}}  className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-4.5xl max-w-6xl font-bold tracking-normal leading-tight">
                    International Conference on Sustainable 
                    Bio-Technologies and Innovations for a Hunger-Free World
                  
                    <br />
                    <motion.span  initial={{y:100,opacity:0}} animate   ={{y:0,opacity:1,transition:{duration:1}}} className="text-base sm:text-lg md:text-xl">(19th and 20th February 2025)</motion.span>
                </motion.p>
            </div>

           
        </motion.div>
    )
}

export default Header
