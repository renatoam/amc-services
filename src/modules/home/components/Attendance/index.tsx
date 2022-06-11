import Text from "@shared/components/atoms/Text";
import Title from "@shared/components/atoms/Title";
import SectionTitle from "@shared/components/molecules/SectionTitles";
import { AttendanceCard, AttendanceWrapper } from "./styles";

export default function Attendance() {
  return (
    <>
      <SectionTitle title="Atendimentos" />
      <AttendanceWrapper>
        <AttendanceCard>
          <Title variant="h2" className="h5" uppercase>Horário</Title>
          <Text>Seg. a Sex.: 07h às 17h </Text>
          <Text>Sábado: 09h às 17h </Text>
          <Text>Domingo: Fechado </Text>
        </AttendanceCard>
        <AttendanceCard>
          <Title variant="h2" className="h5" uppercase>Região</Title>
          <Text>Barueri</Text>
          <Text>Grande SP (regiões próximas a Barueri)</Text>
          <Text>SP Capital</Text>
        </AttendanceCard>
        <AttendanceCard>
          <Title variant="h2" className="h5" uppercase>Normas</Title>
          <Text>NR10</Text>
          <Text>NBR5410</Text>
        </AttendanceCard>
      </AttendanceWrapper>
    </>
  )
}
