import styled from "@emotion/styled";
import Form from "@shared/components/atoms/Form";

export const Wrapper = styled.section`
  margin: auto;
  padding: 1.6rem;
`

export const CustomForm = styled(Form)`
  @media (min-width: 60em) {
    grid-template-columns: 1fr 1fr;
    gap: 1.6rem;

    section:not(:first-child, :nth-child(2)) {
      grid-column: span 2;
    }
  }
`
