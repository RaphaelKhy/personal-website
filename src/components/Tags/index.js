import { BsBootstrap as Bootstrap } from 'react-icons/bs'
import { DiHeroku as Heroku } from 'react-icons/di'
import { DiJavascript1 as Javascript } from 'react-icons/di'
import { DiJqueryLogo as Jquery } from 'react-icons/di'
import { FaReact as React } from 'react-icons/fa'
import { FaSass as Sass } from 'react-icons/fa'
import { FiFramer as Framer } from 'react-icons/fi'
import { SiStyledcomponents as Styledcomponents } from 'react-icons/si'
import { motion } from 'framer-motion'
import { StyledTags } from './style'

function Tags(props) {
    return (
        <StyledTags isTransition={props.isTransition}>
            {props.technologies.map((technology, index) => (
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{
                        type: 'tween',
                        ease: 'easeInOut',
                        duration: 0.7,
                        delay: index * 0.5 + 0.5,
                    }}
                    viewport={{ once: true }}
                >
                    <p key={index}>
                        {technologyIcons[technology]}
                        {technology}
                    </p>
                </motion.div>
            ))}
        </StyledTags>
    )
}

const technologyIcons = {
    React: <React size={'1rem'} />,
    SASS: <Sass size={'1rem'} />,
    Heroku: <Heroku size={'1rem'} />,
    JavaScript: <Javascript size={'1rem'} />,
    Bootstrap: <Bootstrap size={'1rem'} />,
    jQuery: <Jquery size={'1rem'} />,
    'Framer Motion': <Framer size={'1rem'} style={{ height: '100%' }} />,
    'Styed Components': <Styledcomponents size={'2rem'} />,
}

export { Tags }
