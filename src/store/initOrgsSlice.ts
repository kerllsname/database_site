import { createSlice } from '@reduxjs/toolkit';

const initOrgsSlice = createSlice({
  name: 'initOrgs',
  initialState: {
    initOrgs: [],
  },
  reducers: {
    addOrg(state, action) {
      state.initOrgs = action.payload;
    },
  },
});

export const { addOrg } = initOrgsSlice.actions;
export default initOrgsSlice.reducer;
