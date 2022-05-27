import Icon from "@shared/components/atoms/Icon";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Question, Accordion } from "./styles";
import Text from "@shared/components/atoms/Text";
import Title from "@shared/components/atoms/Title";
import { useState } from "react";
import { MuiIconProps } from "@shared/types/mui";

export default function FAQ() {
  const [icon, setIcon] = useState<MuiIconProps>(AddIcon)

  function handleChange() {
    const newIcon = icon === AddIcon ? RemoveIcon : AddIcon

    setIcon(newIcon)
  }

  return (
    <article className="faq">
      <Question>
        <figure>
          <Icon MuiIcon={ChevronRightIcon} variant="default" />
        </figure>
        <Accordion>
          <input id="question" type="checkbox" onChange={handleChange} />
          <label htmlFor="question" className="title">
            <Title variant="h3">Por que eu deveria contratar a AMC?</Title>
          </label>
          <section className="content">
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quia quaerat modi voluptas possimus, veniam ducimus distinctio a, inventore vero vel maiores ea neque, aliquid quam quae architecto dignissimos ad.</Text>
          </section>
        </Accordion>
        <figure>
          <Icon MuiIcon={icon} variant="default" />
        </figure>
      </Question>
    </article>
  )
}