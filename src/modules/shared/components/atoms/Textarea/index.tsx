import { TextareaProps } from '@shared/types/react';
import * as React from 'react';
import { CustomTextarea } from './styles';

export default function Textarea(props: TextareaProps) {
  return <CustomTextarea {...props} />
}
