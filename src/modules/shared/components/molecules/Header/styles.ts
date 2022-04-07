import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const StyledHeader = styled(Box)`
  border-bottom: 0.08rem solid var(--neutral-200);
  display: flex;
  height: 11.2rem;
  justify-content: space-around;
`;

export const StyledNav = styled(Box)`
  align-items: center;
  display: flex;
  flex: 2 1 60%;
  justify-content: space-around;

  a {
    align-self: stretch;
    cursor: pointer;
    display: grid;
    place-items: center;
  }
`;
