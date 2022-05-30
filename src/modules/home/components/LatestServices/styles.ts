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
  background-image: ${props => `url(${props.image})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 2rem;
  cursor: pointer;
  height: 30rem;
  overflow: hidden;
  width: 30rem;
`

export const ServicesContent = styled.section`
  background-color: rgba(41, 37, 56, .6);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;

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
  }
`
