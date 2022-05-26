import { ButtonProps } from "@shared/types/react"
import { CustomButton } from "./styles"

interface CustomButtonProps extends ButtonProps {
  variant?: any
}

export default function Button(props: CustomButtonProps) {
  return (
    <CustomButton>
      {props.children}
    </CustomButton>
  )
}