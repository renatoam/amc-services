import Text from "@shared/components/atoms/Text";
import Link from "@shared/components/atoms/Link";
import { navLinks } from "@shared/constants/menu";
import { StyledHeader, StyledNav } from "./styles";

export default function Header() {
  return (
    <StyledHeader role="banner">
      <StyledNav component="nav">
        {navLinks.map((item) => (
          <Link key={item.id} href={item.link} title={item.text}>
            <Text id={item.id.toString()}>{item.text}</Text>
          </Link>
        ))}
      </StyledNav>
    </StyledHeader>
  );
}
