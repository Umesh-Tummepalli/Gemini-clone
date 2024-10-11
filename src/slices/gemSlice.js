import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import run from "../config/Gemini";

export const getAsyncRes = createAsyncThunk("getdata", async (prompt) => {
  var res = await run(prompt);
  return res;
});

var slice = createSlice({
  name: "gemini",
  initialState: [
  ],
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder.addCase(getAsyncRes.pending, (state, action) => {
        
      state.push({
        isLoading: true,
        data: "",
        isError: false,
        givenPrompt: action.meta.arg,
      },)
    });
    builder.addCase(getAsyncRes.fulfilled, (state, action) => {
      state[state.length -1].data=action.payload
    });
  },
});
export default slice;
export var { getResponse } = slice.actions;
