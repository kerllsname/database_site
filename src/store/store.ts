import { configureStore } from '@reduxjs/toolkit';
import initOrgsSlice from './initOrgsSlice';
import updatedOrgsSlice from './updatedOrgsSlice';

export default configureStore({
  reducer: {
    initOrgs: initOrgsSlice,
    updatedOrgs: updatedOrgsSlice,
  },
});
