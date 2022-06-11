import styled from "@emotion/styled";

export const TitlesContainer = styled.section`
  position: relative;
  width: 100%;
  padding: 10rem 0;
`;

export const PlugWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.2rem;

  @media (min-width: 60em) {
    width: 80%;
  }
`

export const PlugFillet = styled.section`
  width: 100%;
  height: 0.8rem;
  background-color: var(--primary-100);
`;

export const TitleWrapper = styled.section`
  background-color: var(--white);
  width: fit-content;
  padding: 0 1.2rem;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  max-width: 65%;
  text-align: center;

  > h2 {
    font-size: clamp(2.5rem, 4vw, 5rem);
    word-break: keep-all;
  } 
`;