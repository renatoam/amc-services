import { HeadingType } from "@shared/types";
import { ReactNode } from "react";

interface TitleProps {
  variant?: HeadingType
  hstyle?: HeadingType
  uppercase?: boolean
  children: ReactNode
}

export default function Title(props: TitleProps) {
  const { variant: Heading = 'h2', hstyle = 'h2', uppercase, children } = props
  const content = uppercase ? children?.toString().toUpperCase() : children

  return <Heading className={hstyle}>{content}</Heading>;
}
