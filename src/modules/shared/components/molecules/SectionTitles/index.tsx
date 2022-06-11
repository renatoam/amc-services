import Image from "@shared/components/atoms/Image";
import Title from "@shared/components/atoms/Title";
import { TitlesContainer, PlugFillet, PlugWrapper, TitleWrapper } from './styles';

interface SectionTitlesProps {
  title: string;
}

export default function SectionTitle(props: SectionTitlesProps) {
  const { title } = props
  return (
    <TitlesContainer>
      <PlugWrapper>
        <PlugFillet />
        <Image
          src='/images/plug.svg'
          width={50}
          height={85}
          figureWidth={70}
          layout="responsive"
          alt='plug icon in white color'
        />
      </PlugWrapper>
      <TitleWrapper>
        <Title uppercase>{title}</Title>
      </TitleWrapper>
    </TitlesContainer>
  )
}