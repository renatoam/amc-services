import HelperText from '@atoms/HelperText'
import Label from '@atoms/Label'
import Textarea from '@shared/components/atoms/Textarea'
import { TextareaProps } from '@shared/types/react'
import { CustomFormGroup } from './styles'

interface TextareaFormProps extends TextareaProps {
  label?: string
  error?: boolean
  errorMessage?: string
}

export default function TextareaForm(props: TextareaFormProps) {
  const {
    id,
    name,
    label,
    value,
    error = false,
    errorMessage = '',
    rows = 4,
    ...rest
} = props

  return (
    <CustomFormGroup>
      <Textarea id={id} name={name} rows={rows} value={value} {...rest} />
      <Label htmlFor={id}>{label}</Label>
      <HelperText visible={error} message={errorMessage} />
    </CustomFormGroup>
  )
}
