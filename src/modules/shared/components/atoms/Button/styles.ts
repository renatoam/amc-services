import styled from "@emotion/styled";

export const CustomButton = styled.button`
  background-color: var(--primary-500);
  border-radius: 0.8rem;
  color: var(--white);
  display: grid;
  height: 7.2rem;
  font-size: clamp(1.4rem, 6.5vw, 2.4rem);
  margin-bottom: .8rem;
  padding: 1.6rem;
  place-content: center;
  text-transform: uppercase;
  width: 100%;

  @media (min-width: 60em) {
    width: fit-content;
  }
`
