import styled from "@emotion/styled";
import { HelperStatus } from "@shared/types/css";
import { HelperTextProps } from ".";

type StatusType = Required<Pick<HelperTextProps, 'status'>>

const statusColor: Record<keyof typeof HelperStatus, string> = {
  success: 'var(--success-500)',
  info: 'var(--information-500)',
  warning: 'var(--warning-500)',
  error: 'var(--error-500)',
}

const setStatusColor = (props: StatusType) => {
  return statusColor[props.status]
}

export const CustomHelperText = styled.span<StatusType>`
  color: ${setStatusColor};
`
