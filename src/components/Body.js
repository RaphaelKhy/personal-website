import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Projects from "./Projects";
import Contact from "./Contact";
import { StyledBody } from "./styles/Body.styled";

export default function Body(props) {
  return (
    <StyledBody>
      <About isTransition={props.isTransition} />
      <Experience isTransition={props.isTransition} />
      <Education isTransition={props.isTransition} />
      <Projects isTransition={props.isTransition} />
      <Contact isTransition={props.isTransition} />
    </StyledBody>
  );
}
