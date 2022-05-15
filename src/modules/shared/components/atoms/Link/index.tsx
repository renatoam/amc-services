import NextLink from "next/link";
import { ReactNode } from "react";

interface LinkProps {
  href?: string;
  title?: string;
  children: ReactNode;
}

export default function Link(props: LinkProps) {
  const { href = '/', title, children } = props;

  return (
    <NextLink href={href}>
      <a title={title}>{children}</a>
    </NextLink>
  );
}
