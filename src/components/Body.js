import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Education from "./Education";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import { StyledBody } from "./styles/Body.styled";

export default function Body() {
  return (
    <StyledBody>
      <AboutMe />
      <Experience />
      <Education />
      <Projects />
      <ContactMe />
    </StyledBody>
  );
}
