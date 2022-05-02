import styled from "@emotion/styled";
import Select from "@mui/material/Select";
import { FormControl } from "@mui/material";

export const CustomFormControl = styled(FormControl)`
  margin: 1rem;

  label {
    color: var(--neutral-500);
    font-family: inherit;
    font-size: 2rem;

    &.Mui-focused {
      color: var(--neutral-700);

      + div > fieldset {
        border-color: var(--neutral-500) !important;
      }
    }
  }
`

export const CustomSelect = styled(Select)`
  border-radius: 0.8rem;
  color: var(--neutral-500);
  display: grid;
  height: 5.6rem;
  place-items: center;
  width: 42.4rem;

  &:hover {
    fieldset {
      border-color: var(--neutral-500) !important;
    }
  }

  > div {
    padding-right: inherit !important;
  }

  fieldset {
    border-color: var(--neutral-200);
    border-width: 0.2rem;
    transition: all .2s ease-in-out;
  }

  input {
    box-sizing: inherit;
    color: inherit;
    font-size: 2rem;
    height: 100%;
    padding: 0 2rem;
    width: 100%;

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      -webkit-box-shadow: 0 0 0 1000px var(--neutral-100) inset !important;
      -webkit-font-smoothing: antialiased;
      -webkit-text-fill-color: var(--neutral-700);
      transition: all .2s ease-in-out;
    }
  }

  label {
    color: red;
  }

  legend {
    > span {
      font-size: 1.7rem;
    }
  }
`
