import Header from "@shared/components/molecules/Header";
import { ChildrenType } from "@shared/types";

export default function DefaultLayout({ children }: ChildrenType) {
  return (
    <>
      <Header />
      {children}
      <footer>Footer</footer>
    </>
  );
}
