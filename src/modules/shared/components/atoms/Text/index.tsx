import { ReactNode } from "react";
import { Paragraph, Span } from "./styles";

interface TextProps {
  id?: string;
  children: ReactNode;
  variant: "p" | "span";
}

const textVariants = {
  p: Paragraph,
  span: Span,
};

export default function Text({
  variant,
  id = "",
  children,
  ...props
}: TextProps) {
  const Component = textVariants[variant];

  return (
    <Component id={id} {...props}>
      {children}
    </Component>
  );
}
