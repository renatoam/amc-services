import styled from "@emotion/styled";
import Text from "@shared/components/atoms/Text";

export const CustomFooter = styled.footer`
  background-color: var(--primary-500);
`

export const Bottom = styled.section`
  align-items: center;
  border-top: 0.1rem solid var(--neutral-100);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  min-height: 8.8rem;
  padding: 2rem;
  width: 100%;

  @media (min-width: 60em) {
    flex-direction: row;
  }
`

export const CustomText = styled(Text)`
  color: var(--neutral-100);
`
