import React, { useState } from "react";

//  * modules

import Head from "next/head";
import Link from "next/link";

// * components

import Header from "../../components/Header";
import InputComponentForm from "../../components/InputComponent/InputComponentForm";
import ButtonComponent from "../../components/ButtonComponent";

// * utils

import styles from "./Create.module.css";

function Create() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleInputValue(current, stateName) {
    if (stateName === "username") setUserName(current.target.value);
    if (stateName === "email") setEmail(current.target.value);
    if (stateName === "password") setPassword(current.target.value);
  }

  function handleFinishedSignUp() {}

  return (
    <div className={styles.createAccountContainer}>
      <Head>
        <title>Bout Me | Nova Conta</title>
      </Head>

      <Header />

      <main className={styles.createAccountMain}>
        <div className={styles.createAccountBox}>
          <div className={styles.createAccountBoxHeader}>
            <h1>Criar Conta</h1>
            <span>
              <Link href="/">
                <a>Conecte com sua conta</a>
              </Link>{" "}
              caso já tenha uma!
            </span>
          </div>
          <div className={styles.createAccountForm}>
            <strong className={styles.createAccountLabel}>Usuário</strong>
            <InputComponentForm
              type="text"
              typeStyle={"bold"}
              placeholder="ex: hubertryan"
              value={userName}
              handleFunction={(current) =>
                handleInputValue(current, "username")
              }
            />
            <strong className={styles.createAccountLabel}>E-mail</strong>
            <InputComponentForm
              type="email"
              typeStyle={"bold"}
              placeholder="seunome@email.com"
              value={email}
              handleFunction={(current) => handleInputValue(current, "email")}
            />
            <strong className={styles.createAccountLabel}>Senha</strong>
            <InputComponentForm
              type="password"
              typeStyle={"bold"}
              placeholder="Crie uma senha"
              value={password}
              handleFunction={(current) =>
                handleInputValue(current, "password")
              }
            />
            <ButtonComponent handleFunction={handleFinishedSignUp}>
              Finalizar
            </ButtonComponent>
          </div>
        </div>
      </main>

      <img
        src="/socials01_background.png"
        alt="socials bout me"
        className={styles.backgroundSocialsImg}
      />
      <img
        src="/waves_background.png"
        alt="BoutMe Background"
        className="backgroundInitialRoutes"
      />
      <img
        src="/square_background.png"
        alt="BoutMe Squre Background"
        className="backgroundSquareInitialRoutes"
      />
    </div>
  );
}

export default Create;
