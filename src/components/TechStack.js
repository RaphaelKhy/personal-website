import { StyledTechStack } from "./styles/TechStack.styled";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FiFramer } from "react-icons/fi";
import { DiHeroku } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { BsBootstrap } from "react-icons/bs";
import { DiJqueryLogo } from "react-icons/di";
import { SiStyledcomponents } from "react-icons/si";

export default function TechStack(props) {
  return (
    <StyledTechStack isTransition={props.isTransition}>
      {props.technologies.map((technology, index) => (
        <p key={index}>
          {technologyIcons[technology]}
          {technology}
        </p>
      ))}
    </StyledTechStack>
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
