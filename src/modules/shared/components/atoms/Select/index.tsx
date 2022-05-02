import { InputLabel, MenuItem, SelectProps } from "@mui/material";
import { CustomFormControl, CustomSelect } from './styles'
import { v4 as uuid } from 'uuid'

export type OptionType = {
  value: string | number | readonly string[] | undefined
  displayValue: string
  id?: string
}

interface CustomSelectProps extends SelectProps {
  options: OptionType[]
  id: string
  label?: string
}

export default function Select(props: CustomSelectProps) {
  const { options, id, label, ...rest } = props
  const labelId = `${id}-${label ? label.toLocaleLowerCase() : 'label'}`

  return (
    <CustomFormControl>
      <InputLabel id={id}>{label}</InputLabel>
      <CustomSelect
        labelId={labelId}
        id={id}
        label={label}
        {...rest}
      >
        {options?.map(option => (
          <MenuItem key={option.id ?? uuid()} value={option.value}>{option.displayValue}</MenuItem>
        ))}
      </CustomSelect>
    </CustomFormControl>
  )
}