import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_LOCALE } from './i18n';

const initialState = { locale: DEFAULT_LOCALE };
const localeSlice = createSlice({
  name: 'locale',
  initialState,
  reducers: {
    changeLocale: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.locale = action.payload;
    },
  },
});

export const { changeLocale } = localeSlice.actions;

export default localeSlice.reducer;
