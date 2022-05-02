import Header from "@shared/components/molecules/Header";
import Fillet from "@shared/components/molecules/Fillet";
import { ChildrenType } from "@shared/types";
import AdvantagesBar from "@shared/components/molecules/AdvantagesBar";

export default function DefaultLayout({ children }: ChildrenType) {
  return (
    <>
      <Fillet />
      <Header />
      <AdvantagesBar />
      {children}
      <footer>Footer</footer>
    </>
  );
}
