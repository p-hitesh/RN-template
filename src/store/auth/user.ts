import { createSlice } from "@reduxjs/toolkit";
import { IUserData } from "../../services/user-data";
import Storage from "../../utils/local-storage";

interface AuthState {
  data?: IUserData;
  isLogin: boolean;
  error?: string;
}

const initialState: AuthState = {
  data: {},
  isLogin: false,
  error: undefined,
};

const Auth = createSlice({
  name: "user",
  initialState,
  reducers: {
    UserLogin: (state, action) => {
      state.isLogin = true;
      //   state.data = action.payload;
      // console.log(action);
    },
    UserRegister: () => {
      //
    },
  },
});

export const { UserLogin } = Auth.actions;

export const LoginAction =
  (userName: string, password: string) => async (dispatch: any) => {
    // try {
    //   const name = await Storage.getItem("userName");
    //   const pass = await Storage.getItem("password");
    //   if (userName === name && password === pass) {
    //     dispatch(UserLogin({ id: "", name: name }));
    //   } else {
    //     throw new Error("Invalid User");
    //   }
    // } catch (error) {
    //   alert(error);
    // }
    console.log(userName, password);
    dispatch(UserLogin(true));
  };
export const RegisterAction =
  (userName: string, password: string) => async () => {
    try {
      Storage.setItem("userName", userName);
      Storage.setItem("password", password);
    } catch (error) {
      alert(error);
    }
  };

export default Auth.reducer;
