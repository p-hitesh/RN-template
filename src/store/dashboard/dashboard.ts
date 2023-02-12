import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import error from "../../utils/error";
import DashboardDataService, {
  IDashboardData,
} from "../../services/dashboard-data";

interface DashboardPageState {
  dashboardData?: IDashboardData;
  detailCardData?: IDashboardData;
  loading: boolean;
  error?: string;
}

const initialState: DashboardPageState = {
  dashboardData: undefined,
  detailCardData: undefined,
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

export const getDetailCardData = createAsyncThunk(
  "dashboard/entry/{id}",
  async (id: string) => {
    try {
      return DashboardDataService.getDetailCardData(id);
    } catch (error_) {
      return error_;
    }
  }
);

export const updateDetailCardData = createAsyncThunk(
  "dashboard/entry/{id}",
  async (id: string, payload: any) => {
    try {
      return DashboardDataService.updateDetailCard(id, payload);
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
      state.dashboardData = action.payload;
    });
    builder.addCase(getDashboardTable.rejected, (state, action) => {
      state.loading = false;
      // action.payload contains error information
      state.error = error(action.payload);
    });

    builder.addCase(getDetailCardData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getDetailCardData.fulfilled, (state, action) => {
      state.loading = false;
      state.detailCardData = action.payload;
    });
    builder.addCase(getDetailCardData.rejected, (state, action) => {
      state.loading = false;
      // action.payload contains error information
      state.error = error(action.payload);
    });
  },
});

export default dashboardReducer.reducer;
