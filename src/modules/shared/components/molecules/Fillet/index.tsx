import {
  Text,
  FilletContainer,
  WraperContentFillet,
  WraperFillet,
} from "./styles";
import { textsFillet } from "@shared/constants/fillet";
import { useMediaQuery } from "@mui/material";

export default function Fillet() {
  const matches = useMediaQuery("(max-width: 700px)");

  return (
    <FilletContainer className={matches ? "hidden" : ""}>
      <WraperFillet>
        {textsFillet.map((item) => (
          <WraperContentFillet key={item.id}>
            {item.icon}
            <Text variant="p">{item.text}</Text>
          </WraperContentFillet>
        ))}
      </WraperFillet>
    </FilletContainer>
  );
}
