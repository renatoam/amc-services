import { useAccordion } from "../../context"
import { CustomAccInput } from "./styles"

export default function AccInput() {
  const { id, handleChange } = useAccordion()

  return (
    <CustomAccInput id={id} type="checkbox" onChange={handleChange} />
  )
}
