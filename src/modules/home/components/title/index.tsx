import { ReactNode } from "react";

export default function Title({ children }: { children: ReactNode }) {
  return <h1 id="titulo">{children}</h1>;
}
