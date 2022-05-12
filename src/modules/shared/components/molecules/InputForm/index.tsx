import FormGroup from '@atoms/FormGroup'
import HelperText from '@atoms/HelperText'
import Label from '@atoms/Label'
import Input from '@shared/components/atoms/Input'
import { InputProps } from '@shared/types/react'

interface InputFormProps extends InputProps {
  label?: string
  error?: boolean
  errorMessage?: string
}

export default function InputForm(props: InputFormProps) {
  const {
    id,
    name,
    label,
    value,
    type,
    error = false,
    errorMessage = '',
    ...rest
} = props

  return (
    <FormGroup>
      <Input id={id} name={name} type={type} value={value} {...rest} />
      <Label htmlFor={id}>{label}</Label>
      <HelperText visible={error} message={errorMessage} />
    </FormGroup>
  )
}
