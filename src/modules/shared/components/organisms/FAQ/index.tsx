import Icon from "@shared/components/atoms/Icon";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Question, FaqAccordion, FAQWrapper } from "./styles";
import Text from "@shared/components/atoms/Text";
import Title from "@shared/components/atoms/Title";
import { useState } from "react";
import { MuiIconProps } from "@shared/types/mui";
import Chevron from "./components/Chevron";
import { questions } from "./constants";
import SectionTitle from "@shared/components/molecules/SectionTitles";
import { useMediaQuery } from "@mui/material";

export default function FAQ() {
  const [icon, setIcon] = useState<MuiIconProps>(AddIcon)
  const matches = useMediaQuery('(min-width: 60em)')

  function handleChange() {
    const newIcon = icon === AddIcon ? RemoveIcon : AddIcon

    setIcon(newIcon)
  }

  return (
    <>
      <SectionTitle title="FAQ" />
      <FAQWrapper>
        {questions.map(question => {
          return (
            <Question key={question.id}>
              <Chevron />
              <FaqAccordion
                id={question.id}
                trigger={<Title variant="h3" className={matches ? "h5" : "h6"}>{question.title}</Title>}
                handleChange={handleChange}
                content={<Text size={matches ? "regular" : "small"}>{question.content}</Text>}
              />
              <Icon MuiIcon={icon} variant="default" />
            </Question>
          )
        })}
      </FAQWrapper>
    </>
  )
}