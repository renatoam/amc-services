import styled from "@emotion/styled";

export const HeroWrapper = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
  max-width: clamp(120rem, 70vw, 192rem);
  padding: 5rem 0 40rem;
  position: relative;
`

export const Left = styled.section`
  p:nth-of-type(1) {
    color: var(--secondary-1000);
    font-size: clamp(7.5rem, 5vw, 15rem);
    font-weight: var(--fw-heading-1);
    line-height: var(--lh-heading-1);
  }
  
  p:nth-of-type(2) {
    color: var(--secondary-700);
    font-size: var(--fs-heading-2);
    font-weight: var(--fw-heading-2);
    line-height: var(--lh-heading-2);
  }
  
  p:nth-of-type(3) {
    color: var(--secondary-500);
    font-size: var(--fs-heading-3);
    font-weight: var(--fw-heading-3);
    line-height: var(--lh-heading-3);
  }
  
  p:nth-of-type(4) {
    color: var(--secondary-400);
    font-size: var(--fs-heading-4);
    font-weight: var(--fw-heading-4);
    line-height: var(--lh-heading-4);
  }
`

export const Right = styled.section`
  text-align: right;

  > figure {
    margin: -4rem;
  }
`

export const Textual = styled.section`
  p {
    font-size: var(--fs-heading-5);
    font-weight: bold;

    &:nth-of-type(1) {
      color: var(--primary-200);
    }

    &:nth-of-type(2) {
      color: var(--primary-300);
    }

    &:nth-of-type(3) {
      color: var(--primary-400);
    }
  }
`

export const Bottom = styled.section`
    left: 45%;
    max-width: 60rem;
    position: absolute;
    top: clamp(47rem, 30vw, 50rem);
    transform: translate(-50%, -50%);
    width: 50%;
`
