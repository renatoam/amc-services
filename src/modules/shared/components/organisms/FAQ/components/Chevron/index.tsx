import Icon from "@shared/components/atoms/Icon";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { CustomIcon } from "./styles";

export default function Chevron() {
  return (
    <CustomIcon>
      <Icon MuiIcon={ChevronRightIcon} variant="default" />
    </CustomIcon>
  )
}