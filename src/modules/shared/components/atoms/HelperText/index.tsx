import { HelperStatus } from "@shared/types/css"
import { CustomHelperText } from "./styles"

export interface HelperTextProps {
  visible: boolean
  message: string
  status?: HelperStatus
}

export default function HelperText(props: HelperTextProps) {
  const { visible, message, status = HelperStatus.error } = props

  if (!visible) return <></>

  return (
    <CustomHelperText status={status}>{message}</CustomHelperText>
  )
}
