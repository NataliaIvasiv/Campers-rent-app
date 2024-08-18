import { configureStore } from '@reduxjs/toolkit';
import { campersReducer } from './campers/slice';
import storage from 'redux-persist/lib/storage';
import { favoritesReducer } from './favourites/slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'favourites',
  storage,
  whitelist: ['favorites'],
};

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    //filters: filtersReducer,
    favourites: persistReducer(persistConfig, favoritesReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
