import { motion } from 'framer-motion';
import '../styles/education.scss';

const Education = () => {
    return (
        <motion.div className="education section"
        initial={{transform: "translateX(-100%)"}}
        transition={{duration: 0.2, type: "Inertia"}}
        whileInView={{transform: "translateX(0)"}}
        viewport={{ once: true }}
        >
            <h3>Education</h3>
            <motion.div className='degree-title'
            initial={{transform: "translateX(-100%)"}}
            transition={{ type: "Inertia", duration: 0.3}}
            whileInView={{transform: "translateX(-10%)"}}
            viewport={{ once: true }}>
                <span><p>Systems &#160;</p><h4> Engineer</h4></span>
            </motion.div>
            <div className='degree-desc'>
                <p>Since 2021 I'm pursuing a degree in 
                    <span className='degree-desc-title'> Systems Engineer</span>
                    , at the 
                <a className='degree-location' href="https://www.frro.utn.edu.ar/" target="_blank"> Universidad Tecnologica Nacional  </a>
                <br />Learning skills like: System Analysis and Design, Programming, Data Structures, Algorithms, Databases, among others.                
                <p className='degree-year'>(Currently in 3rd year)</p>
                </p>
            </div>
        </motion.div>
    );
};

export default Education;