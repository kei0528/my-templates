import { configureStore, PayloadAction } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { createSlice } from '@reduxjs/toolkit';

// ----------------------------  SLICE  ---------------------------- //

const initialState = {
  foo: false,
  bar: ''
};

export const baz = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleFoo(state) {
      state.foo = !state;
    },
    setBar(state, { payload }: PayloadAction<string>) {
      state.bar = payload;
    }
  }
});

export const { toggleFoo, setBar } = baz.actions;
export const fooReducer = baz.reducer;

// ----------------------------  STORE  ---------------------------- //

const makeStore = () =>
  configureStore({
    reducer: {
      baz: fooReducer
    }
  });

export default makeStore;

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;

// ----------------------------  APP  ---------------------------- //

export const App = () => {
  return (
    <Provider store={makeStore()}>
      <></>
    </Provider>
  );
};
