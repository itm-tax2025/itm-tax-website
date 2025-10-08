import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	headbarOpen: localStorage.getItem('headbarOpen') === 'true',
	language: localStorage.getItem('language') || 'en',
};

const displaySlice = createSlice({
	name: 'display',
	initialState,
	reducers: {
		toggleHeadbar(state) {
			state.headbarOpen = !state.headbarOpen;
			localStorage.setItem('headbarOpen', state.headbarOpen.toString());
		},
	},
});

export const { toggleHeadbar } = displaySlice.actions;
export default displaySlice.reducer;
