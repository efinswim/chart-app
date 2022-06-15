import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  labels: [],
};

export const chartSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload
    },
    setLabel() {},
    removeData() {},
    removeLabel() {},
  },
});

export const { setData, setLabel, removeData, removeLabel } = chartSlice.actions;

export default chartSlice.reducer;
