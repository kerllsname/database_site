import { createSlice } from '@reduxjs/toolkit';

const updatedOrgsSlice = createSlice({
  name: 'updatedOrgs',
  initialState: {
    updatedOrgs: [],
  },
  reducers: {
    updatedOrgs(state, action) {
      state.updatedOrgs = action.payload;
    },
  },
});

export const { updatedOrgs } = updatedOrgsSlice.actions;
export default updatedOrgsSlice.reducer;
