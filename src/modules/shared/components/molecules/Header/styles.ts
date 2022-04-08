import styled from "@emotion/styled";
import RawList from "@shared/components/atoms/List";
import RawText from "@shared/components/atoms/Text";

export const Header = styled.header`
  border-bottom: 0.08rem solid var(--neutral-200);
  display: flex;
  height: 11.2rem;
  justify-content: space-around;
`;

export const List = styled(RawList)`
  align-items: center;
  display: flex;
  flex: 2 1 60%;
  justify-content: space-around;
`;

export const Text = styled(RawText)`
  font-size: clamp(var(--fs-body-small), 1.5vw, var(--fs-heading-6));
  font-weight: var(--fw-heading-6);
  text-transform: uppercase;
`;
