import styled from "@emotion/styled";

export const CustomInput = styled.input`
  border: .2rem solid var(--neutral-300);
  border-radius: 0.8rem;
  color: var(--neutral-500);
  display: grid;
  font-family: 'Montserrat';
  font-size: clamp(1.4rem, 6vw, 2.4rem);
  padding: 1.6rem;
  place-items: center;
  height: 7.2rem;
  transition: border .4s ease-in-out;
  width: 100%;
  word-break: break-all;
  
  &:hover {
    border-color: var(--neutral-500);
  }

  &:focus {
    + label {
      background-color: var(--white);
      border-radius: 2rem;
      left: 1rem;
      padding: 0 1rem;
      top: 0;
    }
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    box-shadow: 0 0 0 1000px var(--neutral-100) inset;
    -webkit-box-shadow: 0 0 0 1000px var(--neutral-100) inset !important;
    -webkit-font-smoothing: antialiased;
    -webkit-text-fill-color: var(--neutral-700);
    transition: all .2s ease-in-out;
  }
`
