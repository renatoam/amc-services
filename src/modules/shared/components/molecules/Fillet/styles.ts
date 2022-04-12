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

export const Fillet = styled.section`
  background-color: var(--primary-300);
  color: var(--white);
  height: 72px;

  &.hidden {
    display: none;
  }
`;

export const WrapFillet = styled.div`
  max-width: 1440px;
  margin: auto;
  display: flex;
  justify-content: space-around;
  padding: 2rem;
`;

export const WrapContentFillet = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
`;
