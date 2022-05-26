import { ReactNode } from "react"
import { CustomForm } from './styles'

interface FormProps {
  children: ReactNode
}

export default function Form(props: FormProps) {
  return (
    <CustomForm {...props}>
      {props.children}
    </CustomForm>
  )
}