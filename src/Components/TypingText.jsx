import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypingText = ({ text, speed = 100 }) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setDisplayedText(text.slice(0, index + 1));
            index++;
            if (index === text.length) clearInterval(interval);
        }, speed);
        return () => clearInterval(interval);
    }, [text, speed]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{ whiteSpace: "pre" }}
        >
            {displayedText}
        </motion.div>
    );
};

export default TypingText;
