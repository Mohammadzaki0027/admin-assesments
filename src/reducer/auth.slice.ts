
import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import type { NavigateFunction } from 'react-router-dom';
import { backend_url, ORIGIN } from '../origin';

interface LoginPayload {
  email: string;
  password: string;
  navigate: NavigateFunction;
}

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  token: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};


export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password, navigate }: LoginPayload, { rejectWithValue }) => {
    try {

      const res:{data:{access_token:string}} = await axios.post(`${ORIGIN}`, { email, password });
   
     

localStorage.setItem('acesstoken', res.data.access_token); 
      navigate('/'); 
      return  res.data.access_token
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || 'Login failed');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.token = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
