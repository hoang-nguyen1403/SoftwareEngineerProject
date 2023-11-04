import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import { Home } from './components/Home/Home';
import { LogIn } from './components/LogIn/LogIn';
import { Routes, Route } from "react-router-dom";

import "./assets/scss/style.scss";
import { createBrowserHistory } from "history";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";


import { useEffect } from 'react';
import {gapi} from "gapi-script"
const clientID = "1002780695209-kbg98839atoldrmcsbmtaqbj22s2bal2.apps.googleusercontent.com"

export const history = createBrowserHistory({ window });




// style

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HistoryRouter history={history}>
    <Routes>
      <Route path='add' element={<App></App>}> 
        {/* <Route path="" element={<Home></Home>}></Route> */}
        
      </Route>
      <Route path="" element={<LogIn></LogIn>}></Route>
    </Routes>
  </HistoryRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

