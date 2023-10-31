import "../styles/skills.scss"
import { motion } from "framer-motion"

const progSkillsLogos = [
    {
        skillName: "React",
        logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg"
    },
    {
        skillName: "JS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
    },
    {
        skillName: "TS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
    },
    {
        skillName: "Python",
        logo: "https://cdn.worldvectorlogo.com/logos/python-5.svg"
    },
    {
        skillName: "HTML",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
    },
    {
        skillName: "CSS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
    },
    {
        skillName: "Sass",
        logo: "https://cdn.worldvectorlogo.com/logos/sass-1.svg"
    },
    {
        skillName: "webpack",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-plain.svg"
    },
    {
        skillName: "Node.js",
        logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
    },
    {
        skillName: "pgSQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg"
    },
    {
        skillName: "VSCode",
        logo: "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg"
    },
    {
        skillName: "Git",
        logo: "https://cdn.worldvectorlogo.com/logos/git-icon.svg"
    },
    {
        skillName:"Docker",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg"
    }]

const designSkillsLogos = [
    {
        skillName: "Illustrator",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg"
    },
    {
        skillName: "Photoshop",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
    },
    {
        skillName: "Premiere",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-plain.svg"
    }
]


const Skills = () => {
    return (
        <motion.div className="globalSkills section">
            
            <motion.div className="skills"
            initial={{transform: "translateX(-100%)"}}
            transition={{duration: 0.2, type: "Inertia"}}
            whileInView={{transform: "translateX(0)"}}
            viewport={{ once: true }}>
                    <h3>Programming Skills</h3>
                        <div className="skills-container">
                            {progSkillsLogos.map((item, index) => {
                                return (
                                    <div className="skill-item" key={index}>
                                        <img src={item.logo} alt={item.skillName} />
                                        <p>{item.skillName}</p>
                                    </div>
                                )
                            })}
                        </div>
            </motion.div>
            <motion.div className="design-skills"
            initial={{transform: "translateX(100%)"}}
            transition={{duration: 0.2, type: "Inertia"}}
            whileInView={{transform: "translateX(0)"}}
            viewport={{ once: true }}>
                <h3>Design Skills</h3>
                    <div className="skills-container">
                        {designSkillsLogos.map((item, index) => {
                            return (
                                <div className="skill-item" key={index}>
                                    <img src={item.logo} alt={item.skillName} />
                                    <p>{item.skillName}</p>
                                </div>
                            )
                        })}
                    </div>
            </motion.div>

        </motion.div>
        
    );
};

export default Skills;