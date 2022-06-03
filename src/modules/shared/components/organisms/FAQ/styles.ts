import styled from "@emotion/styled";
import Accordion from "@shared/components/molecules/Accordion";

export const FAQWrapper = styled.article`
  padding: 1rem;
`

export const Question = styled.section`
  align-items: center;
  display: grid;
  grid-template-columns: 10% 80% 10%;

  > figure {
    height: 2.5rem;
    width: 2.5rem;

    svg {
      font-size: 3rem;
    }
  }
  
  @media (min-width: 60em) {
    grid-template-columns: 15% 70% 15%;

    > figure {
      height: 4rem;
      width: 4rem;

      svg {
        font-size: 4rem;
      }
    }
  }
`

export const FaqAccordion = styled(Accordion)`
  border-bottom: .1rem solid var(--neutral-300);
  padding: 2rem;
  text-align: center;
  
  @media (min-width: 60em) {
    padding: 5.6rem;
    text-align: left;
  }
`
