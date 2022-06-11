import Acc from "./components";
import { AccordionProvider } from "./context";
import { AccordionContextProps } from "./types";

export default function Accordion(props: AccordionContextProps) {
  const { className } = props

  return (
    <AccordionProvider props={props}>
      <Acc {...{ className }}>
        <Acc.Input />
        <Acc.Label />
        <Acc.Content />
      </Acc>
    </AccordionProvider>
  )
}