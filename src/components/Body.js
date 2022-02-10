import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Projects from "./Projects";
import Contact from "./Contact";
import { StyledBody } from "./styles/Body.styled";

export default function Body() {
  return (
    <StyledBody>
      <About />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </StyledBody>
  );
}
