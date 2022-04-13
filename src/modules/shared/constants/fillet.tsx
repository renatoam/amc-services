import LocationOnIcon from "@mui/icons-material/LocationOn";
import DateRangeIcon from "@mui/icons-material/DateRange";
import PhoneIcon from "@mui/icons-material/Phone";

interface textFillet {
  id: number;
  text: string;
  icon: JSX.Element;
}

export const textsFillet: Array<textFillet> = [
  {
    id: 1,
    text: "CAPITAL, BARUERI E REGIÃO",
    icon: <LocationOnIcon fontSize="large" />,
  },
  {
    id: 2,
    text: "SEG. A SEX. - DAS 09H ÀS 18H",
    icon: <DateRangeIcon fontSize="large" />,
  },
  {
    id: 3,
    text: "11 99491-4806 | 11 98745-4277",
    icon: <PhoneIcon fontSize="large" />,
  },
];
