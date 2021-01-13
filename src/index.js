import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "./context/context";
import App from "./App";
import "./index.css";
import { SpeechProvider } from "@speechly/react-client";

ReactDOM.render(
  <SpeechProvider appId="a8036a76-27fe-4c62-ad3f-941b619bf78d" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
