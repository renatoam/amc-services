import { v4 as uuid } from 'uuid'
import FormGroup from "@shared/components/atoms/FormGroup";
import Label from "@shared/components/atoms/Label";
import Select from "@shared/components/atoms/Select";
import { SelectProps } from '@shared/types/react';
import Option, { CustomOptionProps } from '@shared/components/atoms/Option';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';

interface SelectFormProps extends SelectProps {
  options: CustomOptionProps[]
  id: string
  label?: string
}

export default function SelectForm(props: SelectFormProps) {
  const { options, id, label, ...rest } = props

  const [selectValue, setSelectValue] = useState('')
  const [isLabelVisible, setIsLabelVisible] = useState(true)

  const handleChange = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(event.target.value)
  }, [])

  useEffect(() => {
    if (selectValue) setIsLabelVisible(false)

    return () => setIsLabelVisible(true)
  }, [selectValue])

  return (
    <FormGroup>
      <Select
        id={id}
        value={selectValue}
        onChange={handleChange}
        {...rest}
      >
        <Option displayValue='' />
        {options?.map(option => (
          <Option key={option.id ?? uuid()} value={option.value} displayValue={option.displayValue} />
          ))}
      </Select>
      {isLabelVisible && <Label htmlFor={id}>{label}</Label>}
    </FormGroup>
  )
}