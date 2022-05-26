import { ChildrenType } from "@shared/types";
import { CustomFormGroup } from "./styles";


export default function FormGroup(props: ChildrenType) {
  return (
    <CustomFormGroup {...props}>
      {props.children}
    </CustomFormGroup>
  )
}
