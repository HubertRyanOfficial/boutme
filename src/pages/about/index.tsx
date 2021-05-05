import React from "react";

// * modules

import Head from "next/head";

import { useRouter } from "next/router";

// * component

import Header from "../../components/Header";
import ButtonPrimary from "../../components/ButtonComponent/ButtonPrimary";

// * utils

import styles from "./About.module.css";

function About() {
  const router = useRouter();

  //

  function handleFuncitonCreateAccount() {
    router.push("/create");
  }

  function handleFuncitonAccess() {
    router.push("/");
  }

  return (
    <div className={styles.aboutContainer}>
      <Head>
        <title>Bout Me | Sobre</title>
      </Head>

      <Header />
      <main className={styles.aboutContainerMain}>
        <h1>
          Sobre o <span>Bout Me</span>
        </h1>

        <p>
          O <b>Bout Me</b> pode te ajudar a juntar todos os seus links
          importantes em um só lugar, claro que além disso fornecemos <br />
          algumas funções que possam te ajudar mais ainda. Com o <b>
            Bout Me
          </b>{" "}
          você pode colocar 3 links para qualquer lugar onde possa colocar links
          externos como: <b>Tapedin</b> (Na parte de links) e Instagram
          (Biografia). Podendo também fixar o mais importante da lista!
        </p>

        <img src="/about_icon.png" alt="Okay Bout Me" />

        <h2>Vamos começar a usar o Bout Me?</h2>

        <p>
          Comece já criando a sua conta e fazendo seu primeiro smart link para
          <br />
          seu público e adicione em suas mídias sociais.
        </p>

        <div className={styles.aboutOptions}>
          <ButtonPrimary handleFunction={handleFuncitonCreateAccount}>
            Criar conta
          </ButtonPrimary>
          <div id={styles.aboutSeparate} />
          <ButtonPrimary outline={true} handleFunction={handleFuncitonAccess}>
            Acessar
          </ButtonPrimary>
        </div>
      </main>
    </div>
  );
}

export default About;
