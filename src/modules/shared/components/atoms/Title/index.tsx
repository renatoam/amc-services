import { ReactNode } from "react";

interface TitleProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: ReactNode
}

export default function Title(props: TitleProps) {
  const { variant: Heading = 'h2', children } = props

  return <Heading>{children}</Heading>;
}
