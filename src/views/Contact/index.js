import { useContext } from 'react'
import { AiOutlineMail, AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai'
import { themeTransitionContext } from '../../App'
import { ContactAnimation } from '../../components/Animations'
import { StyledContact } from './style'

export const Contact = () => {
    const isTransition = useContext(themeTransitionContext)

    return (
        <StyledContact isTransition={isTransition}>
            <h1 className="title" id="contact">
                Contact
            </h1>

            <div id="body">
                <ContactAnimation
                    delay={0}
                    children={
                        <div id="button">
                            <a
                                href="mailto: raphaelkhaykin@gmail.com"
                                rel="noreferrer"
                            >
                                <AiOutlineMail id="icon" size={30} />
                                <h4>raphaelkhaykin@gmail.com</h4>
                            </a>
                        </div>
                    }
                />

                <ContactAnimation
                    delay={0.1}
                    children={
                        <div id="button">
                            <a
                                href="https://www.linkedin.com/in/raphael-khaykin-23465718a/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <AiFillLinkedin id="icon" size={40} />
                                <h4>Connect on LinkedIn</h4>
                            </a>
                        </div>
                    }
                />

                <ContactAnimation
                    delay={0.2}
                    children={
                        <div id="button">
                            <a
                                href="https://github.com/RaphaelKhy"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <AiOutlineGithub id="icon" size={40} />
                                <h4>View my GitHub</h4>
                            </a>
                        </div>
                    }
                />
            </div>
        </StyledContact>
    )
}
