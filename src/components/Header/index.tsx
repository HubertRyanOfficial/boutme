import React, { memo } from "react";

// * modules

import Link from "next/link";

// * components

// * utils

import styles from "./HeaderComponent.module.css";

//

const Header: React.FC = () => {
  //

  return (
    <header className={styles.headerContainer}>
      <Link href="/">
        <a>
          <img src="/logo.png" alt="BoutMe Logo" />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a className={styles.link}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/create">
              <a className={styles.link}>Criar conta</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className={styles.link}>Sobre</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default memo(Header);
