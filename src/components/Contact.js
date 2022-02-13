import { StyledContact } from "./styles/Contact.styled";
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";

export default function Contact(props) {
  return (
    <StyledContact isTransition={props.isTransition}>
      <h1 className="title" id="contact">
        Contact
      </h1>
      <div id="body">
        <div id="email">
          <a href="mailto: raphaelkhaykin@gmail.com">
            <div id="title">
              <AiOutlineMail id="emailIcon" size={30}></AiOutlineMail>
              <h3>Email Me At</h3>
            </div>
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
    </StyledContact>
  );
}
