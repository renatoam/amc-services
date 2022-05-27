import styled from "@emotion/styled";

export const Question = styled.section`
  align-items: center;
  display: grid;
  grid-template-columns: 15% 70% 15%;
`

export const Accordion = styled.section`
  input[type="checkbox"] {
    display: none;

    & ~ .content {
      max-height: 0;
      overflow: hidden;
      transition: all 0.4s ease-in-out;
    }

    &:checked ~ .content {
      max-height: 20rem;
    }
  }

  label {
    cursor: pointer;
  }
`
