import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dataXLabels: [],
  dataYLabels: [],
};

export const chartSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {
    setDataXLabels(state, action) {
      state.dataXLabels = action.payload;
    },
    setDataYLabels(state, action) {
      state.dataYLabels = action.payload;
    },
  },
});

export const { setDataXLabels, setDataYLabels } = chartSlice.actions;

export default chartSlice.reducer;
