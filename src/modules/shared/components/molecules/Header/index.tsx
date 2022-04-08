import Link from "@shared/components/atoms/Link";
import { navLinks } from "@shared/constants/menu";
import { Header, List, Text } from "./styles";
import ListItem from "@shared/components/atoms/ListItem";
import Logo from "../Logo";

export default function DefaultHeader() {
  return (
    <Header>
      <Logo />
      <List>
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
    </Header>
  );
}
