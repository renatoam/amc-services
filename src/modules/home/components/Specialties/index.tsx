import Title from "@shared/components/atoms/Title";
import Accordion from "@shared/components/molecules/Accordion";

export default function Specialties() {
  return (
    <section>
      <Title>Manutenção Preventiva</Title>
      <Accordion
        id="specialties"
        trigger={<button>Teste</button>}
        content={<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam in, iusto et distinctio nobis, quo atque minima quibusdam consequatur magnam voluptates ipsum, fuga minus assumenda molestiae. Eos placeat ea consectetur.</p>}
      />
    </section>
  )
}
