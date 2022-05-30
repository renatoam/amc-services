import { HeadingType } from "@shared/types";
import { ReactNode } from "react";

interface TitleProps {
  variant?: HeadingType
  hstyle?: HeadingType
  children: ReactNode
}

export default function Title(props: TitleProps) {
  const { variant: Heading = 'h2', hstyle = 'h2', children } = props

  return <Heading className={hstyle}>{children}</Heading>;
}
