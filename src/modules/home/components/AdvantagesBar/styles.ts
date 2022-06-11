import styled from "@emotion/styled";
import RawText from "@shared/components/atoms/Text";

export const Text = styled(RawText)`
  color: var(--white);
`;

export const AdvantagesContainer = styled.section`
  background-color: var(--primary-200);
  min-height: 24rem;
  display: flex;
  margin: 1.2rem 0;
  padding: 4rem
`;

export const AdvantagesWrapper = styled.section`
  max-width: 144rem;
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
  gap: 5.5rem 2.5rem;
  line-height: var(--spacing-xl);
`;

export const AdvantagesContentWrapper = styled.section`
  span {
    opacity: 0.6;
  }
`;

export const TitleWrapper = styled.section`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  text-transform: uppercase;
  padding-bottom: 2.5rem;

  p {
    font-size: var(--fs-heading-6);
    font-weight: var(--fw-heading-6);
  }
`;