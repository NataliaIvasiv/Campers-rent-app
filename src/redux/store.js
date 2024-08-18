import { configureStore } from '@reduxjs/toolkit';
import { campersReducer } from './campers/slice';

const store = configureStore({
  reducer: {
    campers: campersReducer,
    //filters: filtersReducer,
  },
});

export default store;
