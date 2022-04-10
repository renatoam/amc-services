import styled from "@emotion/styled";
import RawList from "@shared/components/atoms/List";
import RawText from "@shared/components/atoms/Text";

export const Header = styled.header`
  border-bottom: 0.08rem solid var(--neutral-200);
  display: grid;
  place-items: center;
`;

export const HeaderContent = styled.section`
  align-items: center;
  display: flex;
  height: 11.2rem;
  justify-content: space-around;
  width: clamp(60rem, 70vw, 140rem);

  @media (max-width: 700px) {
    & {
      width: clamp(30rem, 70vw, 65rem);
    }
  }
`;

export const List = styled(RawList)`
  align-items: center;
  display: flex;
  justify-content: space-around;

  &.hidden {
    display: none;
  }
`;

export const Text = styled(RawText)`
  font-size: clamp(var(--fs-body-small), 1.5vw, var(--fs-heading-6));
  font-weight: var(--fw-heading-6);
  text-transform: uppercase;
`;
