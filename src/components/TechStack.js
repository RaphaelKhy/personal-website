import { StyledTechStack } from "./styles/TechStack.styled";

export default function TechStack(props) {
  return (
    <StyledTechStack isTransition={props.isTransition}>
      {props.technologies.map((technology) => (
        <p>{technology}</p>
      ))}
    </StyledTechStack>
  );
}
