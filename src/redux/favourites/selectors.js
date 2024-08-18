//export const selectFavorites = state => state.favorites.favouriteCampers;
export const selectFavorites = state =>
  state.favourites?.favouriteCampers || [];
