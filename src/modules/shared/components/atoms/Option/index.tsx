import { OptionProps } from "@shared/types/react"
import { CustomOption } from "./styles"

export interface CustomOptionProps extends OptionProps {
  displayValue: string
}

export default function Option(props: CustomOptionProps) {
  return <CustomOption {...props}>{props.displayValue}</CustomOption>
}