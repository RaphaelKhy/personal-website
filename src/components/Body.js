import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Experience from "./Experience";
import Projects from "./Projects";
import { StyledBody } from "./styles/Body.styled";

export default function Body() {
  return (
    <StyledBody>
      <AboutMe />
      <Experience />
      <Projects />
      <ContactMe />
    </StyledBody>
  );
}
