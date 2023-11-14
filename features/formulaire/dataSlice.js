import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(test.pending, (state) => {})
      .addCase(test.fulfilled, (state, action) => {})
      .addCase(test.rejected, (state, action) => {});
  },
});

export const test = createAsyncThunk(
  "formulaireThunk",
  async (credentials, thunkAPI) => {
    try {
      console.log(credentials, thunkAPI);
    } catch (error) {
      console.log(error);
    }
  }
);

export default dataSlice.reducer;
