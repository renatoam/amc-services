import { latestServices } from "@home/constants";
import VisibilityIcon from '@mui/icons-material/Visibility';
import Icon from "@shared/components/atoms/Icon";
import Text from "@shared/components/atoms/Text";
import { ServicesCard, ServicesContent, ServicesWrapper } from "./styles";

export default function LatestServices() {
  return (
    <ServicesWrapper>
      {latestServices.map(service => {
        return (
          <ServicesCard key={service.id} image={service.image}>
            <ServicesContent>
              <Icon variant="default" MuiIcon={VisibilityIcon} />
              <span>Saiba mais</span>
              <Text>{service.title}</Text>
            </ServicesContent>
          </ServicesCard>
        )
      })}
    </ServicesWrapper>
  )
}