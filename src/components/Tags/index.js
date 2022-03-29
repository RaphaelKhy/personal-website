import { StyledTags } from "./style";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FiFramer } from "react-icons/fi";
import { DiHeroku } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { BsBootstrap } from "react-icons/bs";
import { DiJqueryLogo } from "react-icons/di";
import { SiStyledcomponents } from "react-icons/si";
import { motion } from "framer-motion";

function Tags(props) {
  return (
    <StyledTags isTransition={props.isTransition}>
      {props.technologies.map((technology, index) => (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            type: "tween",
            ease: "easeInOut",
            duration: 0.7,
            delay: (index * 0.4) + 0.5,
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
  );
}

const technologyIcons = {
  React: <FaReact size={"1rem"} />,
  SASS: <FaSass size={"1rem"} />,
  Heroku: <DiHeroku size={"1rem"}></DiHeroku>,
  JavaScript: <DiJavascript1 size={"1rem"} />,
  Bootstrap: <BsBootstrap size={"1rem"} />,
  jQuery: <DiJqueryLogo size={"1rem"} />,
  "Framer Motion": <FiFramer size={"1rem"} />,
  "Styed Components": <SiStyledcomponents size={"2rem"} />,
};

export { Tags };
