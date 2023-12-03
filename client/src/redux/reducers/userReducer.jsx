import { createSlice } from '@reduxjs/toolkit'
import { ACCESS_TOKEN, getStore, getStoreJson, setStore, setStoreJson, USER_LOGIN  } from '../../utils/tools';
import { history } from '../../index';
import { http } from '../../utils/tools';

const initialState = {
    userLogin: getStoreJson(USER_LOGIN) // có thể null hoặc object

}

const userReducer = createSlice({
    name: "userReducer",
    initialState,
    reducers: {
        getProfileAction: (state,action)=>{
            state.userLogin = action.payload
        }
    }
  });

export const {getProfileAction} = userReducer.actions

export const {} = userReducer.actions

export default userReducer.reducer



export const logInAPI = (jsonProfile)=>{
    return async (dispatch) =>{
        try{
            const { email, googleId } = jsonProfile;
            console.log(`/user/${googleId}/login/`)
            const result = await http.post(`/user/${googleId}/login/`, jsonProfile);
            console.log(result.data)
            setStore(ACCESS_TOKEN, result.data.token)
            history.push("/")
            dispatch(getProfileAPI(googleId))

        }catch(err){
            // history.push("/")
            console.log(err)
        }

    }     
}

export const logOut = ()=>{
    localStorage.removeItem(USER_LOGIN)
    localStorage.removeItem(ACCESS_TOKEN)
    history.push("/")
    window.location.reload();
    
}


export const getProfileAPI = (googleId) => {
    return async dispatch => {
        try {

            console.log("googleId ", googleId)
            const result = await http.post('user/getProfile/', JSON.stringify({"googleId": googleId}))
            console.log(result.data)

            const action = getProfileAction(result.data);
            dispatch(action);
            setStoreJson(USER_LOGIN,result.data);
            
        }catch(err) {
            console.log(err);
        }
    }
}