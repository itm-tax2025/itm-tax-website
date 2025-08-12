import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	theme: localStorage.getItem('theme') || 'light',
	language: localStorage.getItem('language') || 'en',
};

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setTheme: (state, action) => {
			state.theme = action.payload;
			localStorage.setItem('theme', action.payload);
		},
		setLanguage: (state, action) => {
			state.language = action.payload;
			localStorage.setItem('language', action.payload);
		},
		toggleTheme: (state) => {
			const newTheme = state.theme === 'light' ? 'dark' : 'light';
			state.theme = newTheme;
			localStorage.setItem('theme', newTheme);
		},
	},
});

export const { setTheme, setLanguage, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
