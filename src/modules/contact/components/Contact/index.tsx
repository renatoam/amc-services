import { cities, LABEL_CITY } from "@contact/constants";
import Form from "@shared/components/atoms/Form";
import InputForm from "@shared/components/molecules/InputForm";
import SelectForm from "@shared/components/molecules/SelectForm";
import ContactActions from "../ContactActions";

export default function Contact() {
  return (
    <section style={{ width: 1400, margin: 'auto' }}>
      <Form>
        <InputForm name="name" id="name" label="Digite seu nome" />
        <InputForm name="phone" id="phone" label="Digite seu telefone" />
        <SelectForm
          id="city"
          name="city"
          options={cities}
          label={LABEL_CITY}
        />
        <InputForm
          id="description"
          name="description"
          label="Descreva o melhor possível seu problema"
        />
        <ContactActions />
      </Form>
    </section>
  )
}
