import Link from "@shared/components/atoms/Link";
import { navLinks } from "@shared/constants/menu";
import { Header, HeaderContent, List, Text } from "./styles";
import ListItem from "@shared/components/atoms/ListItem";
import Logo from "../Logo";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery } from "@mui/material";

export default function DefaultHeader() {
  const matches = useMediaQuery("(max-width: 700px)");

  return (
    <Header>
      <HeaderContent>
        <Logo />
        <List className={matches ? "hidden" : ""}>
          {navLinks.map((item) => (
            <ListItem key={item.id}>
              <Link href={item.link} title={item.text}>
                <Text id={item.id.toString()} variant="p">
                  {item.text}
                </Text>
              </Link>
            </ListItem>
          ))}
        </List>
        <nav id="menu" title="menu">
          <MenuIcon fontSize="large" />
        </nav>
      </HeaderContent>
    </Header>
  );
}
