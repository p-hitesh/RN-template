import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import error from "../../utils/error";
import DashboardDataService, {
  IDashboardData,
} from "../../services/dashboard-data";

interface DashboardPageState {
  data?: IDashboardData;
  loading: boolean;
  error?: string;
}

const initialState: DashboardPageState = {
  data: undefined,
  loading: false,
  error: undefined,
};

export const getDashboardTable = createAsyncThunk(
  "dashboard/entries",
  async () => {
    try {
      return DashboardDataService.getDashboardData();
    } catch (error_) {
      return error_;
    }
  }
);

const dashboardReducer = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers(builder): void {
    builder.addCase(getDashboardTable.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getDashboardTable.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getDashboardTable.rejected, (state, action) => {
      state.loading = false;
      // action.payload contains error information
      state.error = error(action.payload);
    });
  },
});

export default dashboardReducer.reducer;
