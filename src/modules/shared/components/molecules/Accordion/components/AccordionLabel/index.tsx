import { useAccordion } from '../../context'
import { CustomAccLabel } from './styles'

export default function AccLabel() {
  const { id, trigger, triggerStyle } = useAccordion()

  return (
    <>
      
      <CustomAccLabel htmlFor={id} className={triggerStyle}>
        {trigger}
      </CustomAccLabel>
    </>
  )
}