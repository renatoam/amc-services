import { ReactNode } from "react"
import { CustomForm } from './styles'

interface FormProps {
  children: ReactNode
}

export default function Form({ children }: FormProps) {
  return (
    <CustomForm>
      {children}
    </CustomForm>
  )
}