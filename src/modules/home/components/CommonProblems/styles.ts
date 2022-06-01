import styled from "@emotion/styled";

export const CommonProblemsWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`

export const CommonProblem = styled.section`
  display: grid;
  gap: 2rem;
  text-align: center;

  p {
    margin: 0 auto;
    max-width: 14rem;
    word-break: keep-all;

    @media (min-width: 60em) {
      max-width: 18rem;
    }
  }
`

export const CommonProblemsCard = styled.section`
  background-color: var(--primary-500);
  border: .4rem solid var(--primary-500);
  border-radius: 0.8rem;
  display: grid;
  height: 14rem;
  place-content: center;
  transition: all .4s ease-in-out;
  width: 14rem;

  &:hover {
    background-color: transparent;
    
    svg {
      color: var(--primary-500);
    }
  }

  svg {
    color: var(--white);
    font-size: 8rem;
  }

  @media (min-width: 60em) {
    height: 20.2rem;
    width: 20.2rem;

    svg {
      font-size: 12rem !important;
    }
  }
`
