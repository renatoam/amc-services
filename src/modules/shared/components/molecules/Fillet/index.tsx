import { Text, Fillet, WrapContentFillet, WrapFillet } from "./styles";
import { textsFillet } from "@shared/constants/fillet";
import { useMediaQuery } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DateRangeIcon from "@mui/icons-material/DateRange";
import PhoneIcon from "@mui/icons-material/Phone";

export default function FilletWrapper() {
  const matches = useMediaQuery("(max-width: 700px)");
  return (
    <Fillet className={matches ? "hidden" : ""}>
      <WrapFillet>
        {textsFillet.map((item) => (
          <WrapContentFillet key={item.id}>
            {item.id === 1 ? (
              <LocationOnIcon fontSize="large" />
            ) : item.id === 2 ? (
              <DateRangeIcon fontSize="large" />
            ) : (
              <PhoneIcon fontSize="large" />
            )}
            <Text variant="p">{item.text}</Text>
          </WrapContentFillet>
        ))}
      </WrapFillet>
    </Fillet>
  );
}
