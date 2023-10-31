import "../styles/aboutme.scss"
import {motion} from 'framer-motion'

const Aboutme = () => {

    return (
        <motion.div className="about-me section"
        initial={{x: "-100vw"}}
        animate={{x:"0vw"}}
        transition={{
            delay: 1.5
        }}>
            <h3>About Me</h3>
            <p>
                <b id="arg">Argentinian (24).</b> part-time developer and student. Pursuing a degree.
            </p>
            <p>Currently learning web development throught <a className="elearn" href="https://www.theodinproject.com/" target="_blank" rel="noopener noreferrer">The Odin Project</a> and <a className="elearn" href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">freeCodeCamp</a>.</p>
            <p>Besides coding and learning I like graphic design, videogames, boardgames, D&D and football.</p>
        </motion.div>
    );
};

export default Aboutme;