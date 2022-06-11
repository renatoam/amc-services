import styled from "@emotion/styled";

interface ServicesCardProps {
  image: string
}

export const ServicesWrapper = styled.article`
  display: flex;
  flex-wrap: wrap;
  gap: 3.2rem;
  justify-content: center;
`

export const ServicesCard = styled.section<ServicesCardProps>`
  --card-size: 30rem;

  align-items: flex-end;
  background-image: ${props => `url(${props.image})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 2rem;
  cursor: pointer;
  display: flex;
  height: var(--card-size);
  overflow: hidden;
  width: var(--card-size);

  &:hover > section {
    max-height: var(--card-size);
  }
  
  &:hover figure,
  &:hover span {
    opacity: 1;
  }
`

export const ServicesContent = styled.section`
  background-image: linear-gradient(to top, black 40%, transparent 95%);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  max-height: 13rem;
  overflow: hidden;
  padding-bottom: 2rem;
  transition: all .4s ease-in-out;
  width: 100%;

  > figure,
  span {
    opacity: 0;
    transition: all .8s ease-in-out;
  }

  p, span {
    color: var(--white);
    text-align: center;
  }
  
  svg {
    color: var(--neutral-100);
    font-size: 8rem;
  }
  
  p {
    margin-top: 4rem;
    min-height: 7rem;
  }
`
