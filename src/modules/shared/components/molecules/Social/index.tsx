import Icon from "@shared/components/atoms/Icon";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/FacebookTwoTone';
import InstagramIcon from '@mui/icons-material/Instagram';
import { CustomFormGroupSocial } from "./styles";

export default function Social() {
  return (
    <CustomFormGroupSocial>
      <Icon href="/#whatsapp" MuiIcon={WhatsAppIcon} />
      <Icon href="/#facebook" MuiIcon={FacebookIcon} />
      <Icon href="/#instagram" MuiIcon={InstagramIcon} />
    </CustomFormGroupSocial>
  )
}