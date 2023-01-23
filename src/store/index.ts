import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import landingReducer from "./landing/slice";
import Auth from "./auth/user";
import dashboardReducer from "./dashboard/dashboard";

const store = configureStore({
  reducer: {
    landing: landingReducer,
    auth: Auth,
    dashboard: dashboardReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export default store;
