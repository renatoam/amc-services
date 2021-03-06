import Header from "@shared/components/molecules/Header";
import Fillet from "@shared/components/molecules/Fillet";
import { ChildrenType } from "@shared/types";
import Footer from "@shared/components/molecules/Footer";

export default function DefaultLayout({ children }: ChildrenType) {
  return (
    <>
      <Fillet />
      <Header />
      {children}
      <Footer />
    </>
  );
}
