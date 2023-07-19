import Link from "next/link";
import styles from "./styles.module.css";

export default function NavBar() {
  const linksData = [
    { desc: "Counter", path: "/counter" },
    { desc: "About", path: "/about" },
  ];
  const links = (
    <div className={styles.navbar__group_link}>
      {linksData.map((val) => {
        return (
          <Link className={styles.navbar__link} key={val} href={val.path}>
            {val.desc}
          </Link>
        );
      })}
    </div>
  );
  return <div className={styles.navbar}>{links}</div>;
}
