import { useAccordion } from '../../context'
import { CustomAccHeader } from './styles'

export default function AccHeader() {
  const { id, handleChange, trigger, triggerStyle } = useAccordion()

  return (
    <CustomAccHeader>
      <input id={id} type="checkbox" onChange={handleChange} />
      <label htmlFor={id} className={triggerStyle}>
        {trigger}
      </label>
    </CustomAccHeader>
  )
}