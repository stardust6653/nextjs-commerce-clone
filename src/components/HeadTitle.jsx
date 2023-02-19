import React from "react";

const HeadTitle = () => {
  return (
    <>
      <div
        style={{
          width: "80%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderBottom: "1px solid black",
        }}
      >
        <img
          src="/assets/logo.png"
          alt="Toy Project"
          style={{ width: "100px", margin: "20px 0 0" }}
        />
        <h1 style={{ fontSize: "10px", margin: "10px 0 20px" }}>토이프로젝트</h1>
      </div>
    </>
  );
};

export default HeadTitle;
