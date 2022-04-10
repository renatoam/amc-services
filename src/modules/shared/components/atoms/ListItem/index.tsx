import { ChildrenType } from "@shared/types";
import { Li } from "./styles";

export default function ListItem({ children }: ChildrenType) {
  return <Li role="listitem">{children}</Li>;
}
