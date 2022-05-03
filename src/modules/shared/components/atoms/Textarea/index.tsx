import * as React from 'react';
import { CustomTextarea } from './styles';
import { InputLabel, FormControl, TextareaAutosizeProps } from '@mui/material';

interface TextareaProps extends TextareaAutosizeProps {
  id?: string
  name?: string
  label?: string
  defaultValue?: string
}

export default function Textarea(props: TextareaProps) {
  const { id, name, label, defaultValue, ...rest } = props

  return (
    <FormControl>
      <InputLabel id={id}>{label}</InputLabel>
      <CustomTextarea
        id={id}
        name={name}
        defaultValue={defaultValue}
        aria-label="description textarea"
        {...rest}
      />
    </FormControl>
  );
}
