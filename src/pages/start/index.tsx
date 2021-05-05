import React, { useCallback, useState } from "react";

// * modules

import Link from "next/link";

// * components

import Header from "../../components/Header";
import InputComponent from "../../components/InputComponent";
import InputComponentWithButton from "../../components/InputComponent/InputComponentWithButton";

// * utils

import styles from "./Start.module.css";

//

function Start() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputValue = useCallback((event, type) => {
    let value = event.target.value;

    switch (type) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  }, []);

  function handleSignInUser() {}

  return (
    <main className={styles.homeContainer}>
      <Header />
      <div className={styles.homeItems}>
        <main className={styles.homeMain}>
          <h1>Crie seu link curto e com todas as suas mídias sociais.</h1>

          <div className={styles.homeMainInfo}>
            <strong>Fazer Login</strong>
            <span>
              Conecte com sua conta ou
              <Link href="/create">
                <a>crie uma agora!</a>
              </Link>
            </span>
          </div>

          <div className={styles.homeAuth}>
            <InputComponent
              placeholder="E-mail"
              typeStyle={"outline"}
              type={"email"}
              value={email}
              handleFunction={(current) => handleInputValue(current, "email")}
            />
            <InputComponentWithButton
              placeholder="Senha"
              type={"password"}
              value={password}
              handleFunction={(current) =>
                handleInputValue(current, "password")
              }
              buttonName="Entrar"
              buttonFunction={handleSignInUser}
            />
          </div>
          <a>
            @Bout Me 2021 -{" "}
            <Link href="/policy">
              <a>Política de dados</a>
            </Link>
            .
          </a>
        </main>
        <img src="/card.png" alt="BoutMe Card" />
      </div>
      <img
        src="/waves_background.png"
        alt="BoutMe Background"
        className="backgroundInitialRoutes"
      />
    </main>
  );
}

export default Start;
// + Desenvolvido por Hubert Ryan
