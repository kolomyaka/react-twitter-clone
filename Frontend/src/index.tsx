import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from "./store/store";
import {SnackbarProvider} from "notistack";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);


root.render(
    <Provider store={store}>
      <BrowserRouter>
        <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
            <App />
        </SnackbarProvider>
      </BrowserRouter>
    </Provider>
);
