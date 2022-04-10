import { ReactNode } from "react";
import { Nav, Ul } from "./styles";

interface ListProps {
  className?: string;
  children: ReactNode;
}

export default function List({ className, children, ...props }: ListProps) {
  return (
    <Nav>
      <Ul role="list" className={className} {...props}>
        {children}
      </Ul>
    </Nav>
  );
}
