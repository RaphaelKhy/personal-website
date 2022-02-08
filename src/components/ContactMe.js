import { StyledContactMe } from "./styles/ContactMe.styled";
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";

export default function ContactMe() {
  return (
    <StyledContactMe>
      <h1 className="title" id="contact">
        Contact
      </h1>
      <div id="body">
        <div id="email">
          <a href="mailto: raphaelkhaykin@gmail.com">
            <AiOutlineMail id="emailIcon" size={40}></AiOutlineMail>
            <h3>Email Me At</h3>
            raphaelkhaykin@gmail.com
          </a>
        </div>
        <div id="linkedIn">
          <a
            href="https://www.linkedin.com/in/raphael-khaykin-23465718a/"
            target="_blank"
          >
            <AiFillLinkedin id="linkedinIcon" size={40}></AiFillLinkedin>
            <h3>Connect on LinkedIn</h3>
          </a>
        </div>
      </div>
    </StyledContactMe>
  );
}
