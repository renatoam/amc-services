import { ChildrenType } from "@shared/types";
import AccHeader from "./AccordionHeader";

export default function Acc({ children }: ChildrenType) {
  return (
    <>{children}</>
  )
}

Acc.Header = AccHeader
