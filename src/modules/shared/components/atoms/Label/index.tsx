import { CSSPosition } from "@shared/types/css";
import { DetailedHTMLProps, LabelHTMLAttributes } from "react";
import { CustomLabel } from "./styles";

export interface LabelProps extends DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
  position?: CSSPosition
}

export default function Label(props: LabelProps) {
  return (
    <CustomLabel {...props}>
      {props.children}
    </CustomLabel>
  )
}