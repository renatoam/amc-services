import Acc from "./components";
import { AccordionProvider } from "./context";
import { AccordionContextProps } from "./types";

export default function Accordion(props: AccordionContextProps) {
  return (
    <AccordionProvider props={props}>
      <Acc>
        <Acc.Header />
      </Acc>
    </AccordionProvider>
  )
}