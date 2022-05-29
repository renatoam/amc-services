import { ReactNode } from "react";
import { Paragraph, Span } from "./styles";

interface TextProps {
  id?: string;
  children: ReactNode;
  variant?: "p" | "span";
  size?: 'large' | 'regular' | 'small'
}

const textVariants = {
  p: Paragraph,
  span: Span,
};

export default function Text({
  id = "",
  variant = "p",
  size = 'regular',
  children,
  ...props
}: TextProps) {
  const Component = textVariants[variant];

  return (
    <Component id={id} className={`body-${size}`} {...props}>
      {children}
    </Component>
  );
}
