import Text from "@shared/components/atoms/Text";
import { navLinks } from "@shared/constants/menu";
import { StyledHeader, StyledNav } from "./styles";

export default function Header() {
  return (
    <StyledHeader role="banner">
      <StyledNav component="nav">
        {navLinks.map((item) => (
          <a key={item.id} href={item.link}>
            <Text>{item.text}</Text>
          </a>
        ))}
      </StyledNav>
    </StyledHeader>
  );
}
