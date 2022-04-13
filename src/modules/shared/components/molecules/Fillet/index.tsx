import {
  Text,
  FilletContainer,
  FilletContentWrapper,
  FilletWrapper,
} from "./styles";
import { textsFillet } from "@shared/constants/fillet";
import { useMediaQuery } from "@mui/material";

export default function Fillet() {
  const matches = useMediaQuery("(max-width: 700px)");

  return (
    <FilletContainer className={matches ? "hidden" : ""}>
      <FilletWrapper>
        {textsFillet.map((item) => (
          <FilletContentWrapper key={item.id}>
            {item.icon}
            <Text variant="p">{item.text}</Text>
          </FilletContentWrapper>
        ))}
      </FilletWrapper>
    </FilletContainer>
  );
}
