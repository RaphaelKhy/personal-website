import { BsBootstrap as Bootstrap } from 'react-icons/bs'
import { DiJavascript1 as Javascript } from 'react-icons/di'
import { DiJqueryLogo as Jquery } from 'react-icons/di'
import { FaReact as React } from 'react-icons/fa'
import { FaDocker as Docker } from "react-icons/fa";
import { FiFramer as Framer } from 'react-icons/fi'
import { SiStyledcomponents as StyledComponents } from 'react-icons/si'
import { SiPostgresql as PostgreSQL } from 'react-icons/si'
import { SiAntdesign as Antdesign } from 'react-icons/si'
import { SiApachekafka as Kafka } from "react-icons/si";
import { SiApacherocketmq as RocketMQ } from "react-icons/si";
import { TbBrandTypescript as Typescript } from 'react-icons/tb'
import { TbBrandNextjs as Nextjs } from 'react-icons/tb'
import { TbBrandPython as Python } from 'react-icons/tb'
import { TbBrandGolang as Golang } from 'react-icons/tb'
import { AiOutlineKubernetes as Kubernetes } from "react-icons/ai";

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
  Golang: <Golang size={'1.5rem'} />,
  JavaScript: <Javascript size={'1rem'} />,
  jQuery: <Jquery size={'1rem'} />,
  'Next.js': <Nextjs size={'1rem'} />,
  PostgreSQL: <PostgreSQL size={'1rem'} />,
  Python: <Python size={'1rem'} />,
  React: <React size={'1rem'} />,
  'Styed Components': <StyledComponents size={'2rem'} />,
  Typescript: <Typescript size={'1rem'} />,
  Docker: <Docker size={'1rem'} />,
  Kafka: <Kafka size={'1rem'} />,
  Kubernetes: <Kubernetes size={'1rem'} />,
  RocketMQ: <RocketMQ size={'1rem'} />
}

export { Tags }
