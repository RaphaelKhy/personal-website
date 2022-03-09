import { StyledContact } from "./styles/Contact.styled";
import { AiOutlineMail, AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";

export default function Contact(props) {
  return (
    <StyledContact isTransition={props.isTransition}>
      <h1 className="title" id="contact">
        Contact
      </h1>
      <div id="body">
        <div id="button">
          <a href="mailto: raphaelkhaykin@gmail.com">
              <AiOutlineMail id="icon" size={30}></AiOutlineMail>
              <h4>raphaelkhaykin@gmail.com</h4>
          </a>
        </div>
        <div id="button">
          <a
            href="https://www.linkedin.com/in/raphael-khaykin-23465718a/"
            target="_blank"
          >
            <AiFillLinkedin id="icon" size={40}></AiFillLinkedin>
            <h4>Connect on LinkedIn</h4>
          </a>
        </div>
        <div id="button">
          <a
            href="https://github.com/RaphaelKhy"
            target="_blank"
          >
            <AiOutlineGithub id="icon" size={40}></AiOutlineGithub>
            <h4>View my GitHub</h4>
          </a>
        </div>
      </div>
    </StyledContact>
  );
}
