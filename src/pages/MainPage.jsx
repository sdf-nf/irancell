import React from "react";
import Body from "../components/body/Body";
import Header from "../components/header/Header";

const MainPage = () => {
  return (
    <>
      <main
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <section>left</section>
        <section>
          <header style={{ maxWidth: "50vw" }}>
            <Header />
          </header>
          <article>
            <Body />
          </article>
        </section>
        <section>Right</section>
      </main>
    </>
  );
};
export default MainPage;
