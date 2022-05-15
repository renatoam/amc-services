import Button from "@shared/components/atoms/Button";
import Social from "@shared/components/molecules/Social";
import { CustomFormGroupActions } from "./styles";

export default function ContactActions() {
  return (
    <CustomFormGroupActions>
      <Button>Solicitar avaliação</Button>
      <Social />
    </CustomFormGroupActions>
  )
}