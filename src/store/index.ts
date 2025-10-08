import { configureStore } from '@reduxjs/toolkit';

import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

import themeReducer from './slice/themeSlice';
import displayReducer from './slice/displaySlice';
const store = configureStore({
	reducer: {
		theme: themeReducer,
		display: displayReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
