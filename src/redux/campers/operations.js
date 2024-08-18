import { createAsyncThunk } from '@reduxjs/toolkit';
import { requestGetCampers } from '../../components/API';

const fetchCampers = createAsyncThunk(
  'campers/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await requestGetCampers();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default fetchCampers;
