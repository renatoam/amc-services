import Icon from "@shared/components/atoms/Icon";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Question, Accordion, FAQWrapper } from "./styles";
import Text from "@shared/components/atoms/Text";
import Title from "@shared/components/atoms/Title";
import { useState } from "react";
import { MuiIconProps } from "@shared/types/mui";
import Chevron from "./components/Chevron";
import { questions } from "./constants";
import SectionTitle from "@shared/components/molecules/SectionTitles";

export default function FAQ() {
  const [icon, setIcon] = useState<MuiIconProps>(AddIcon)

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
              <Accordion>
                <input id={question.id} type="checkbox" onChange={handleChange} />
                <label htmlFor={question.id} className="title">
                  <Title variant="h3" className="h5">{question.title}</Title>
                </label>
                <section className="content">
                  <Text>{question.content}</Text>
                </section>
              </Accordion>
              <figure>
                <Icon MuiIcon={icon} variant="default" />
              </figure>
            </Question>
          )
        })}
      </FAQWrapper>
    </>
  )
}