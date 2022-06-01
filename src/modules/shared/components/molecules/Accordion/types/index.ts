import { ChangeEventHandler, ReactNode } from "react"

export interface AccordionContextProps {
  id: string
  handleChange?: ChangeEventHandler<HTMLInputElement>
  trigger: ReactNode
  triggerStyle?: string
}
