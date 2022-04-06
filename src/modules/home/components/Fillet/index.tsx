import { ReactNode } from "react";
import styles from "./styles.module.css";

export default function FilletWrapper({ children }: { children: ReactNode }) {
  return <section className={styles.fillet}>{children}</section>;
}
