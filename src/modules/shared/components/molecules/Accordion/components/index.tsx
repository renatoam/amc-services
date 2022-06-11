import { ChildrenType } from "@shared/types";
import AccContent from "./AccordionContent";
import AccInput from "./AccordionInput";
import AccLabel from "./AccordionLabel";

export default function Acc({ children, ...props }: ChildrenType) {
  return (
    <section {...props}>{children}</section>
  )
}

Acc.Input = AccInput
Acc.Label = AccLabel
Acc.Content = AccContent
