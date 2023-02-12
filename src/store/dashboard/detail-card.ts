import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import error from "../../utils/error";
import DashboardDataService, {
  IDashboardData,
} from "../../services/dashboard-data";

interface DetailPageSTate {
  data?: IDashboardData;
  loading: boolean;
  error?: string;
}

const initialState: DetailPageSTate = {
  data: undefined,
  loading: false,
  error: undefined,
};

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

const detailCardReducer = createSlice({
  name: "detailPage",
  initialState,
  reducers: {},
  extraReducers(builder): void {
    builder.addCase(getDetailCardData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getDetailCardData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getDetailCardData.rejected, (state, action) => {
      state.loading = false;
      // action.payload contains error information
      state.error = error(action.payload);
    });
  },
});

export default detailCardReducer.reducer;
