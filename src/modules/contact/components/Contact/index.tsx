import { cities, LABEL_CITY } from "@contact/constants";
import InputForm from "@shared/components/molecules/InputForm";
import SelectForm from "@shared/components/molecules/SelectForm";
import TextareaForm from "@shared/components/molecules/TextareaForm";
import ContactActions from "../ContactActions";
import SectionTitle from "@shared/components/molecules/SectionTitles";
import { Wrapper, CustomForm } from "./styles";

export default function Contact() {
  return (
    <>
      <SectionTitle title="CONTATO" />
      <Wrapper>
        <CustomForm>
          <InputForm name="name" id="name" label="Digite seu nome" />
          <InputForm name="phone" id="phone" label="Digite seu telefone" />
          <SelectForm
            id="city"
            name="city"
            options={cities}
            label={LABEL_CITY}
          />
          <TextareaForm
            id="description"
            name="description"
            label="Descreva o melhor possível seu problema"
          />
          <ContactActions />
        </CustomForm>
      </Wrapper>
    </>
  )
}
