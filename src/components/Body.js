import About from "./About";
// import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import { StyledBody } from "./styles/Body.styled";
import ExperienceMobile from "./ExperienceMobile";

export default function Body(props) {
  return (
    <StyledBody>
      <About isTransition={props.isTransition} />
      {/* <Experience isTransition={props.isTransition} /> */}
      <ExperienceMobile isTransition={props.isTransition} />
      <Projects isTransition={props.isTransition} />
      <Contact isTransition={props.isTransition} />
    </StyledBody>
  );
}
