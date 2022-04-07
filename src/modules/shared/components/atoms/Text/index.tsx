import { ReactNode } from "react";
import { StyledText } from "./styles";

interface TextProps {
  id?: string;
  children: ReactNode;
}

export default function Text({ id, children }: TextProps) {
  return <StyledText id={id}>{children}</StyledText>;
}
