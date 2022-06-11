import { HeadingType } from "@shared/types";
import { ReactNode } from "react";

interface TitleProps {
  variant?: HeadingType
  className?: HeadingType
  uppercase?: boolean
  children: ReactNode
}

export default function Title(props: TitleProps) {
  const { variant: Heading = 'h2', className = 'h2', uppercase, children } = props
  const content = uppercase ? children?.toString().toUpperCase() : children

  return <Heading className={className}>{content}</Heading>;
}
