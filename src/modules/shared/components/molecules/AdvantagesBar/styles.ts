import styled from "@emotion/styled";
import RawText from "@shared/components/atoms/Text";

export const Text = styled(RawText)`
  color: var(--white);
`;

export const AdvantagesContainer = styled.section`
  background-color: var(--primary-200);
  height: 24rem;
  display: flex;
  margin: 1rem 0;

  @media (max-width: 1024px) {
    & {
      height: 100%;
    }
  }
`;

export const AdvantagesWrapper = styled.section`
  display: flex;
  justify-content: space-around;
  max-width: 144rem;
  width: 100%;
  margin: auto;
  gap: 2.5rem;

  @media (max-width: 1024px) {
    & {
      flex-wrap: wrap;
      padding: 24px 12px;
    }
  }
`;

export const AdvantagesContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  line-height: 24px;

  span {
    opacity: 0.6;
  }

  @media (max-width: 1024px) {
    & {
      width: 45%;
    }
  }

  @media (max-width: 480px) {
    & {
      width: 80%;
    }
  }
`;

export const TitleWrapper = styled.section`
  display: flex;
  align-items: center;
  gap: 2rem;
  text-transform: uppercase;
  padding-bottom: 2.5rem;

  p {
    font-size: 25px;
  }
`;
