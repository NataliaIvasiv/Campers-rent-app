import { createAsyncThunk } from '@reduxjs/toolkit';
import { requestGetCampers } from '../../components/API';

const fetchCampers = createAsyncThunk(
  'campers/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await requestGetCampers();
      console.log(data);
      return data;
    } catch (error) {
      console.log('i am error');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default fetchCampers;
