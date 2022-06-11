import styled from "@emotion/styled"

export const CustomAccInput = styled.input`
  &[type="checkbox"] {
    display: none;

    & ~ .content {
      max-height: 0;
      overflow: hidden;
      transition: all 0.4s ease-in-out;
    }

    &:checked ~ .content {
      max-height: 50rem;
    }
  }
`