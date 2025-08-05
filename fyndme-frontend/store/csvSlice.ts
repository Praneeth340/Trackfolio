import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchCSVData = createAsyncThunk('csv/fetch', async () => {
  const response = await axios.get('http://localhost:5000/api/data');
  return response.data;
});

export { fetchCSVData };


// ✅ ADD THIS 👇
interface CSVState {
  data: any[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CSVState = {
  data: [],
  status: 'idle',
  error: null,
};

const csvSlice = createSlice({
  name: 'csv',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCSVData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCSVData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchCSVData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch CSV';
      });
  },
});

export default csvSlice.reducer;

