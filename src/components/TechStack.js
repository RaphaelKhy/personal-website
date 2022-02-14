import { StyledTechStack } from "./styles/TechStack.styled";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { DiHeroku } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { BsBootstrap } from "react-icons/bs";
import { DiJqueryLogo } from "react-icons/di";
import { SiStyledcomponents } from "react-icons/si";

export default function TechStack(props) {
  return (
    <StyledTechStack isTransition={props.isTransition}>
      {props.technologies.map((technology) => (
        <p>
          {technologyIcons[technology]}
          {technology}
        </p>
      ))}
    </StyledTechStack>
  );
}

const technologyIcons = {
  React: <FaReact size={"1rem"}></FaReact>,
  SASS: <FaSass size={"1rem"}></FaSass>,
  Heroku: <DiHeroku size={"1rem"}></DiHeroku>,
  JavaScript: <DiJavascript1 size={"1rem"}></DiJavascript1>,
  Bootstrap: <BsBootstrap size={"1rem"}></BsBootstrap>,
  jQuery: <DiJqueryLogo size={"1rem"}></DiJqueryLogo>,
  "Styed Components": <SiStyledcomponents size={"2rem"}></SiStyledcomponents>,
};
