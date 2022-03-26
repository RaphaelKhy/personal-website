import { About } from "../About";
import { Projects } from "../Projects";
import { Contact } from "../Contact";
import { StyledBody } from "./style";
import { Experience } from "../Experience";

export const Body = () => {
  return (
    <StyledBody>
      <About />
      <Experience />
      <Projects />
      <Contact />
    </StyledBody>
  );
};
