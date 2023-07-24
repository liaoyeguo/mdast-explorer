import Main from "@/componenets/Main";
import styles from "./page.module.css";
import StoreProvider from "@/componenets/StoreProvider";

export default function Home() {
  return (
    <StoreProvider>
      <main className={styles.main}>
        <Main />
      </main>
    </StoreProvider>
  );
}
