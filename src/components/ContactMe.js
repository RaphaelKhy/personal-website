import { StyledCard } from "./styles/Card.styled";
import { StyledContactMe } from "./styles/ContactMe.styled";
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";

export default function ContactMe() {
  return (
    <StyledContactMe id="contact">
      <h1 className="title">Contact Me</h1>
      <StyledCard id="contactBody">
        <div id="email">
          <AiOutlineMail></AiOutlineMail>
        </div>
        <div id="linkedIn">
          <AiFillLinkedin></AiFillLinkedin>
        </div>
      </StyledCard>
    </StyledContactMe>
  );
}
