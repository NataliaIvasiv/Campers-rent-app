import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favouriteCampers: [],
  },
  reducers: {
    addFavorites(state, action) {
      state.favouriteCampers.push(action.payload);
    },
    deleteFavorites(state, action) {
      state.favouriteCampers = state.favouriteCampers.filter(
        item => item.id !== action.payload
      );
    },
  },
});

export const { addFavorites } = favoritesSlice.actions;
export const { deleteFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
