import styled from "@emotion/styled";
import FormGroup from "@shared/components/atoms/FormGroup";

export const CustomFormGroupActions = styled(FormGroup)`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 60em) {
    align-items: flex-start;
    flex-direction: row;
    justify-content: space-between;
  }
`
