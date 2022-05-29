import styled from "@emotion/styled";

export const TestimonialContent = styled.section`
  max-width: 100vw;
  overflow-x: scroll;
  padding: 2rem;

  @media (min-width: 60em) {
    padding: 4rem;
  }
`

export const TestimonialOverflow = styled.div`
  display: flex;
  gap: 2.4rem;
`

export const TestimonialCard = styled.section`
  min-width: 30rem;
`

export const TestimonialHeader = styled.header`
  align-items: center;
  display: flex;
  gap: 2rem;
  padding: 2rem 0;
`

export const AvatarPlaceholder = styled.div`
  background-color: var(--primary-500);
  border-radius: 100%;
  color: var(--white);
  display: grid;
  font-size: var(--body-large);
  height: 4rem;
  place-content: center;
  width: 4rem;
`

