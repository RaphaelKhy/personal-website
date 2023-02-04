import { About } from '../About'
import { Contact } from '../Contact'
import { Experience } from '../Experience'
import { Projects } from '../Projects'
import { StyledBody } from './style'

export const Body = () => {
    return (
        <StyledBody>
            <About />
            <Experience />
            <Projects />
            <Contact />
        </StyledBody>
    )
}
