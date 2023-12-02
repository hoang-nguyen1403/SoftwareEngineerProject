import {history} from '../index'
import axios from "axios";

export const clientId =
  "1002780695209-kbg98839atoldrmcsbmtaqbj22s2bal2.apps.googleusercontent.com";


export const config = {
    setCookie(name,value,days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    },
    getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)===' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    },
    setStore: (name,value)=>{
        localStorage.setItem(name, value)
    },
    getStore: (name)=>{
        if (localStorage.getItem(name)){
            return localStorage.getItem(name);
        }
        return null
    },
    setStoreJson: (name, value)=>{
        let json = JSON.stringify(value);
        localStorage.setItem(name, json)
    },
    getStoreJson:(name)=>{
        if(localStorage.getItem(name)){
            return JSON.parse(localStorage.getItem(name))
        } 
        return null
    },
    ACCESS_TOKEN: "accessToken",
    USER_LOGIN: "userLogin"
}

export const {setCookie, getCookie,setStore, getStore, setStoreJson, getStoreJson, ACCESS_TOKEN, USER_LOGIN} = config;


const BACKEND_DOMAIN = "ttp://127.0.0.1:8000/api/"
export const BACKEND_LOGIN_URL = "http://127.0.0.1:8000/user/login/"

export const http = axios.create({
    baseURL: BACKEND_DOMAIN, timeout:30000
})