import { useAccordion } from "../../context";
import { CustomAccContent } from "./styles";

export default function AccContent() {
  const { content } = useAccordion()

  return (
    <CustomAccContent className="content">
      {content}
    </CustomAccContent>
  )
}
