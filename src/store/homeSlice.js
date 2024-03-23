import { createSlice } from '@reduxjs/toolkit';

export const homeSlice = createSlice({
	name: 'home',
	initialState: {
		url: {},
		genres: {},
	},
	reducers: {
		getAPIConfig: (state, action) => {},
		getGenres: (state, action) => {},
	},
});

export default homeSlice.reducer;
