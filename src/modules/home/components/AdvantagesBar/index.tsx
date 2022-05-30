import {
  Text,
  AdvantagesContainer,
  AdvantagesWrapper,
  AdvantagesContentWrapper,
  TitleWrapper,
} from "./styles";
import { textsAdvantages } from "@home/constants/advantages";
import Image from "@shared/components/atoms/Image";

export default function AdvantagesBar() {
  return (
    <AdvantagesContainer>
      <AdvantagesWrapper>
        {textsAdvantages.map((data) => (
          <AdvantagesContentWrapper key={data.id}>
            <TitleWrapper>
              <Image src={data.icon} width="35px" height="40px" alt={data.alt} />
              <Text variant="p">{data.title}</Text>
            </TitleWrapper>
            <Text variant="p">{data.subtitle}</Text>
            <Text variant="span">{data.text}</Text>
          </AdvantagesContentWrapper>
        ))}
      </AdvantagesWrapper>
    </AdvantagesContainer>
  );
}