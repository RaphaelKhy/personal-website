import { BsBootstrap as Bootstrap } from 'react-icons/bs'
import { DiHeroku as Heroku } from 'react-icons/di'
import { DiJavascript1 as Javascript } from 'react-icons/di'
import { DiJqueryLogo as Jquery } from 'react-icons/di'
import { FaReact as React } from 'react-icons/fa'
import { FaSass as Sass } from 'react-icons/fa'
import { FiFramer as Framer } from 'react-icons/fi'
import { SiStyledcomponents as StyledComponents } from 'react-icons/si'
import { SiPostgresql as PostgreSQL } from 'react-icons/si'
import { SiAntdesign as Antdesign } from 'react-icons/si'
import { TbBrandTypescript as Typescript } from 'react-icons/tb'
import { TbBrandNextjs as Nextjs } from 'react-icons/tb'
import { TbBrandPython as Python } from 'react-icons/tb'
import { TbBrandGolang as Golang } from 'react-icons/tb'
import { TbBrandGatsby as Gatsby } from 'react-icons/tb'

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
            delay: index * 0.5 + 0.5
          }}
          viewport={{ once: true }}
          key={index}
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
  'Ant Design': <Antdesign size={'1rem'} />,
  Bootstrap: <Bootstrap size={'1rem'} />,
  'Framer Motion': <Framer size={'1rem'} style={{ height: '100%' }} />,
  Gatsby: <Gatsby size={'1rem'} />,
  Golang: <Golang size={'1.5rem'} />,
  Heroku: <Heroku size={'1rem'} />,
  JavaScript: <Javascript size={'1rem'} />,
  jQuery: <Jquery size={'1rem'} />,
  'Next.js': <Nextjs size={'1rem'} />,
  PostgreSQL: <PostgreSQL size={'1rem'} />,
  Python: <Python size={'1rem'} />,
  React: <React size={'1rem'} />,
  SASS: <Sass size={'1rem'} />,
  'Styed Components': <StyledComponents size={'2rem'} />,
  Typescript: <Typescript size={'1rem'} />
}

export { Tags }
