import React from "react";
import Body from "../components/body/Body";
import Header from "../components/header/Header";
import LeftSideBar from "../components/leftSidebar/LeftSidebar";

const MainPage = () => {
  return (
    <>
      <main
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <section>
          <LeftSideBar />
        </section>
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
