import { specialties } from "@home/constants";
import { ExpandMore } from "@mui/icons-material";
import Icon from "@shared/components/atoms/Icon";
import Text from "@shared/components/atoms/Text";
import Title from "@shared/components/atoms/Title";
import { SpAccordion, SpecialtiesCard, SpecialtiesOverlay, SpecialtiesWrapper } from "./styles";

export default function Specialties() {
  return (
    <SpecialtiesWrapper>
      {specialties.map(specialtie => {
        return (
          <SpecialtiesCard key={specialtie.id} image={specialtie.image}>
            <SpecialtiesOverlay>
              <Title variant="h2" hstyle="h5">{specialtie.title}</Title>
              <SpAccordion
                id={specialtie.id}
                trigger={
                  <div className="shine">
                    <Icon MuiIcon={ExpandMore} />
                  </div>
                }
                content={<Text>{specialtie.description}</Text>}
              />
            </SpecialtiesOverlay>
          </SpecialtiesCard>
        )
      })}
    </SpecialtiesWrapper>
  )
}
