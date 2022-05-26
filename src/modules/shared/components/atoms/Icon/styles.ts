import styled from "@emotion/styled";
import { IconProps } from ".";

type CustomIconType = Partial<IconProps>

export const CustomIcon = styled.figure<CustomIconType>`
  display: grid;
  place-items: center;

  > svg {
    font-size: 4rem;
  }
  
  &.circular {
    background-color: var(--primary-500);
    border-radius: 100%;
    color: var(--white);
    height: 8rem;
    width: 8rem;
  }
`
