import { SelectProps } from '@shared/types/react'
import { CustomSelect } from './styles'

export default function Select(props: SelectProps) {
  return (
    <CustomSelect {...props}>
      {props.children}
    </CustomSelect>
  )
}