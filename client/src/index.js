import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import { Home } from './pages/Home/Home';
import { LogIn } from './pages/LogIn/LogIn';
import Printting from './pages/Printting/Printting';
import PrintCommand from './pages/PrintCommand/PrintCommand';
import UploadFile from './pages/UploadFile/UploadFile';

import Profile from './pages/Profile/Profile';

import { Routes, Route } from "react-router-dom";


import "./assets/scss/style.scss";
import { createBrowserHistory } from "history";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
//setup redux
import { Provider } from "react-redux";
import { store } from "./redux/configStore";



export const history = createBrowserHistory({ window });


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <HistoryRouter history={history}>
    <Routes>
      <Route path='' element={<App></App>}> 
        <Route path="home" element={<Home></Home>}></Route>
        <Route path="printting" element={<Printting></Printting>}></Route>
        <Route path="uploadfile" element={<UploadFile></UploadFile>}></Route>
        <Route path="printfile" element={<PrintCommand></PrintCommand>}></Route>
        <Route path="userProfile" element={<Profile></Profile>}></Route>
      </Route>
      <Route path="login" element={<LogIn></LogIn>}></Route>
    </Routes>
  </HistoryRouter>
  </Provider>
);



