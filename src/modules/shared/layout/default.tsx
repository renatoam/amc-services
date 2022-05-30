import Header from "@shared/components/molecules/Header";
import Fillet from "@shared/components/molecules/Fillet";
import { ChildrenType } from "@shared/types";
import AdvantagesBar from "@shared/components/molecules/AdvantagesBar";
import Footer from "@shared/components/molecules/Footer";

export default function DefaultLayout({ children }: ChildrenType) {
  return (
    <>
      <Fillet />
      <Header />
      <AdvantagesBar />
      {children}
      <Footer />
    </>
  );
}
