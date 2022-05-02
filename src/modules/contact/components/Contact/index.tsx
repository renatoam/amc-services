import { cities, LABEL_CITY } from "@contact/constants";
import Input from "@shared/components/atoms/Input";
import Select from "@shared/components/atoms/Select";
import Form from "@shared/components/atoms/Form";

export default function Contact() {
  return (
    <section style={{ width: 1400, margin: 'auto' }}>
      <Form>
        <Input type="text" name="name" id="name" label="Digite seu nome" />
        <Input type="text" name="phone" id="phone" label="Digite seu telefone" />
        <Select
          id="city"
          name="city"
          options={cities}
          label={LABEL_CITY}
        />
        <section>
          <label htmlFor="description">Descrição</label>
          <textarea name="description" id="description" />
        </section>
      </Form>
    </section>
  )
}
