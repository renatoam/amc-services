import styled from "@emotion/styled";
import { LabelProps } from ".";

export const CustomLabel = styled.label<LabelProps>`
  color: var(--neutral-500);
  font-family: 'Montserrat';
  font-size: 2rem;
  left: 0;
  position: ${props => props.position || 'absolute'};
  top: 50%;
  transform: translate(1.6rem, -50%);
  transition: all .4s ease-in-out;
`
