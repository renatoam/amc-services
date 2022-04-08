import { ChildrenType } from "@shared/types";
import { Nav, Ul } from "./styles";

export default function List({ children }: ChildrenType) {
  return (
    <Nav>
      <Ul role="list">{children}</Ul>
    </Nav>
  );
}
