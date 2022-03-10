import { StyledContact } from "./styles/Contact.styled";
import { AiOutlineMail, AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { motion } from "framer-motion";

export default function Contact(props) {
  const buttonVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <StyledContact isTransition={props.isTransition}>
      <h1 className="title" id="contact">
        Contact
      </h1>
      <div id="body">
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div id="button">
            <a href="mailto: raphaelkhaykin@gmail.com">
              <AiOutlineMail id="icon" size={30}></AiOutlineMail>
              <h4>raphaelkhaykin@gmail.com</h4>
            </a>
          </div>
        </motion.div>

        <div id="button">
          <motion.div
            variants={buttonVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <a
              href="https://www.linkedin.com/in/raphael-khaykin-23465718a/"
              target="_blank"
            >
              <AiFillLinkedin id="icon" size={40}></AiFillLinkedin>
              <h4>Connect on LinkedIn</h4>
            </a>
          </motion.div>
        </div>
        <div id="button">
          <motion.div
            variants={buttonVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <a href="https://github.com/RaphaelKhy" target="_blank">
              <AiOutlineGithub id="icon" size={40}></AiOutlineGithub>
              <h4>View my GitHub</h4>
            </a>
          </motion.div>
        </div>
      </div>
    </StyledContact>
  );
}
