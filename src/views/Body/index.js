import { About } from "../About";
import { Projects } from "../Projects";
import { Contact } from "../Contact";
import { StyledBody } from "./style";
import { Experience } from "../Experience";

function Body(props) {
  const isTransition = props;
  return (
    <StyledBody>
      <About isTransition={isTransition} />
      <Experience isTransition={isTransition} />
      <Projects isTransition={isTransition} />
      <Contact isTransition={isTransition} />
    </StyledBody>
  );
}

export { Body };
