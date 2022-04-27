import { TextFieldProps } from "@mui/material";
import { CustomInput } from './styles'

type CustomInputProps = TextFieldProps

export default function Input(props: CustomInputProps) {
  return <CustomInput variant={props.variant ?? "outlined"} {...props} />
}