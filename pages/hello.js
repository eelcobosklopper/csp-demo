import { useState, useEffect } from "react";

export default function Hello() {
  return (
    <>
      <span
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          background: "lightsalmon",
          height: "100%",
          width: "100%",
          border: 'solid 5px'
        }}
      ></span>
      <h1 style={{ position: "absolute", width: '100%', textAlign: 'center' }}>Hello from another page!</h1>
    </>
  );
}
