import { ChildrenType } from "@shared/types";
import { StyledText } from "./styles";

export default function Text({ children }: ChildrenType) {
  return <StyledText>{children}</StyledText>;
}
