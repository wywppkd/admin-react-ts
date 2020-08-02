import React from "react";
import { BrowserRouter } from "react-router-dom";
import "normalize.css";
import "./App.css";
import { Provider } from "react-redux";
import { configureStore } from "./store";
import "normalize.css";
import 'antd/dist/antd.css';
import BasicLayout from "./layouts/BasicLayout";

/**
 * 获取store仓库
 */
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <BasicLayout/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
