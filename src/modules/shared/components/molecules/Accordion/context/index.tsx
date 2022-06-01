import { ChildrenType } from "@shared/types";
import { createContext, useContext, useMemo } from "react";
import { AccordionContextProps } from "../types";

const initialContextValue: AccordionContextProps = {
  id: '',
  handleChange: undefined,
  trigger: <></>,
  triggerStyle: ''
}

export const AccordionContext = createContext<AccordionContextProps>(initialContextValue)

export const useAccordion = () => useContext(AccordionContext)

interface AccordionProviderProps extends ChildrenType {
  props: AccordionContextProps
}

export const AccordionProvider = ({ children }: AccordionProviderProps) => {

  const value: AccordionContextProps = useMemo(() => (initialContextValue), [])

  return (
    <AccordionContext.Provider value={value}>
      {children}
    </AccordionContext.Provider>
  )
}
