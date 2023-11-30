import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./components/counter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
    }}
  >
    <Counter minusOrPlusOne="1" minusOrPlusFive="5" />
  </div>
);
