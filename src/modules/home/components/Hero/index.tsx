import Image from "@atoms/Image";
import Text from "@shared/components/atoms/Text";
import Logo from "@shared/components/molecules/Logo";
import { Bottom, HeroWrapper, Left, Right, Textual } from "./styles";

export default function Hero() {
  return (
    <HeroWrapper>
      <Left>
        <Text>Industrial</Text>
        <Text>Residencial</Text>
        <Text>Comercial</Text>
        <Text>Predial</Text>
      </Left>
      <Right>
        <Logo layout="responsive" />
        <Textual>
          <Text>Segurança e confiabilidade</Text>
          <Text>em serviços elétricos</Text>
          <Text>é na AMC Services</Text>
        </Textual>
      </Right>
      <Bottom>
        <Image
          src="/images/multimetro.svg"
          height={500}
          width={500}
          alt="Multimetro"
          layout="responsive"
          priority
        />
      </Bottom>
    </HeroWrapper>
  )
}