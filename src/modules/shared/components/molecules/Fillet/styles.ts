import styled from "@emotion/styled";
import RawText from "@shared/components/atoms/Text";

export const Text = styled(RawText)`
  color: var(--white);
  font-size: var(--fs-body-regular);
  font-weight: var(--fw-body-regular);
  line-height: var(--lh-body-regular);

  @media (max-width: 1024px) {
    font-size: var(--fs-body-small);
    font-weight: var(--fw-body-small);
    line-height: var(--lh-body-small);
  }
`;

export const FilletContainer = styled.section`
  background-color: var(--primary-300);
  color: var(--white);
  height: 7.2rem;
  display: flex;

  &.hidden {
    display: none;
  }
`;

export const WraperFillet = styled.section`
  max-width: 144rem;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-around;
`;

export const WraperContentFillet = styled.section`
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: space-between;
`;
