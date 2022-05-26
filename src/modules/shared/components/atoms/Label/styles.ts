import styled from "@emotion/styled";
import { LabelProps } from ".";

export const CustomLabel = styled.label<LabelProps>`
  color: var(--neutral-500);
  font-family: 'Montserrat';
  font-size: clamp(1.4rem, 6vw, 2.4rem);
  left: 0;
  padding: 0 1.6rem;
  position: ${props => props.position || 'absolute'};
  top: 50%;
  transform: translate(0, -50%);
  transition: all .4s ease-in-out;
`
