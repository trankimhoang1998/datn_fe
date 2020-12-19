import React from "react";
import Routes from "../routes/Routes";
import { Router } from "react-router-dom";
import history from "../helper/history";
import { GlobalStyle } from "../style/global-styles";

// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalLoading from "./Components/GlobalLoading/GlobalLoading";
import { ToastContainer } from "react-toastify";
import configStore from "../redux/configStore/configStore";
import { Provider } from "react-redux";
import HandleTitle from "../helper/handleTitle";

const store = configStore();

function App() {
  return (
    <>
      <HandleTitle />
      <Provider store={store}>
        <GlobalStyle />
        <Router history={history}>
          <ToastContainer></ToastContainer>
          <GlobalLoading></GlobalLoading>
          <Routes></Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
