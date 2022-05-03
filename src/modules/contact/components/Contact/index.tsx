import { cities, LABEL_CITY } from "@contact/constants";
import Form from "@shared/components/atoms/Form";
import Input from "@shared/components/atoms/Input";
import Select from "@shared/components/atoms/Select";

export default function Contact() {
  return (
    <section style={{ width: 1400, margin: 'auto' }}>
      <Form>
        <Input name="name" id="name" label="Digite seu nome" />
        <Input name="phone" id="phone" label="Digite seu telefone" />
        <Select
          id="city"
          name="city"
          options={cities}
          label={LABEL_CITY}
        />
        <Input
          id="description"
          name="description"
          label="Descreva o melhor possível seu problema"
          multiline
          minRows={3}
          maxRows={4}
          style={{ gridColumnStart: 1, gridColumnEnd: 3 }}
        />
      </Form>
    </section>
  )
}
