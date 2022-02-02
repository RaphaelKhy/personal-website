import { StyledTechStack } from "./styles/TechStack.styled";

export default function TechStack(props) {
  return (
    <StyledTechStack>
      {props.technologies.map((technology) => (
        <p>{technology}</p>
      ))}
    </StyledTechStack>
  );
}
