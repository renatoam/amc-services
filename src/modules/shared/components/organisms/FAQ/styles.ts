import styled from "@emotion/styled";

export const FAQWrapper = styled.article`
  padding: 1rem;
`

export const Question = styled.section`
  align-items: center;
  display: grid;
  grid-template-columns: 10% 80% 10%;
  
  @media (min-width: 60em) {
    grid-template-columns: 15% 70% 15%;
  }
`

export const Accordion = styled.section`
  border-bottom: .1rem solid var(--neutral-300);
  padding: 2rem;
  text-align: center;
  
  @media (min-width: 60em) {
    padding: 5.6rem;
    text-align: left;
  }

  input[type="checkbox"] {
    display: none;

    & ~ .content {
      max-height: 0;
      overflow: hidden;
      transition: all 0.4s ease-in-out;
    }

    &:checked ~ .content {
      max-height: 30rem;
    }
  }

  label {
    cursor: pointer;
  }

  .content {
    padding-top: 2.4rem;
  }
`
