import { useEffect, useState } from 'react';
import '../styles/career.scss';
import {motion, useAnimate} from 'framer-motion'

const career =[
  {
    year: 2020,
    month: "Dec",
    title: 'Customer Support',
    description: "During the Covid-19 pandemic's summers, I worked as a customer support agent for the Complejo E. Lotuf.",
    techonologies: ['Microsoft Excel', 'Microsoft Word', 'Microsoft PowerPoint']
  },
  {
    year: 2021,
    month: "Dec",
    title: 'Customer Support',
    description: "During the Covid-19 pandemic's summers, I worked as a customer support agent for the Complejo E. Lotuf.",
    techonologies: ['Microsoft Excel', 'Microsoft Word', 'Microsoft PowerPoint']
  },
  {
    year: 2022,
    month: "June",
    title: 'Freelancer Designer',
    description: 'I worked as designer, doing logos, banners, and other stuff.',
    techonologies: ['Adobe Premiere', 'Adobe Illustrator', 'Adobe Photoshop']
  },
  
  {
    year: 2023,
    month: "Sep",
    title: 'Odoo Developer',
    description: 'I am currently working as an Odoo Developer at Elepe Servicios.',
    techonologies: ['Python', 'XML', 'PostgreSQL', 'Docker', 'Portainer', 'pgAdmin']
  },
]

const Career = () => {
  const [scope, animate] = useAnimate();
  const [selectedCircle, setSelectedCircle] = useState<number | null>(career.length - 1);

  const handleCircleClick = (index: number) => {
    setSelectedCircle(index);
  }

  useEffect(() => {
    if (selectedCircle !== null) {
      animate(scope.current, {
        opacity: [0, 1],
      })
    }
  }, [animate, scope, selectedCircle])



  return (
    <motion.div  className="career section"
    initial={{x: "100vw"}}
    animate={{x: "0vw"}}
    transition={{
      delay: 1.9
  }}>
      <h3>My <a>Career</a> Timeline</h3>
      <motion.div className="career-display"
      initial={{x: "100vw"}}
      animate={{x: "0vw"}}
      transition={{delay: 2.3, duration: 0.2, type: 'spring'}}
      >
        <div className="timeline">
          {career.map((item, index) => {
            return (
              <div className='timeline-items' key={index}>
                  <div className="circle-container" key={index}>
                    <div className={`circle ${selectedCircle === index ? 'selected' : ''}`} onClick={() => handleCircleClick(index)}></div>
                    <div className="line"></div>
                    <div className="year">{item.year}</div>
                    <div className="month">{item.month}</div>
                  </div>
                  <hr></hr>
              </div>
            )
          }
          )}
            <div className='timeline-items'> <p>Present</p> </div>
        </div>
        {selectedCircle !== null && (
          
          <div className="selected-item" ref={scope}>
            <h4>
              {career[selectedCircle].title}
            </h4>
            <hr></hr>
            <div className='career-info'><p>{career[selectedCircle].description}</p>
            {career[selectedCircle].techonologies && (
              <div className="technologies"><span> Technologies: </span>
                {career[selectedCircle].techonologies.map((item, index) => {
                  return (
                    <span className="techonology" key={index}>
                      {item}<span> | </span>
                    </span>
                  )
                })}
              </div>
            )}
            </div>
          </div>
        )}
        </motion.div>
    </motion.div >
  );
};

export default Career;