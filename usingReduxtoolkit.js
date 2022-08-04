import { createSlice, configureStore } from "@reduxjs/toolkit";
const redux = require("redux");

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.amount;
    },
  },
});

//Create multiple slices
const initialAuthState = {
    isAuthenticated: true
}
const AuthSlice = createSlice({
    name:'counter1',
    initialState:initialAuthState,
    reducers:{
        login(state){
            state.isAuthenticated = true;
        },
        logout(state){
            state.isAuthenticated = false;
        }
    }

})

const store = configureStore({
    reducer:{auth:AuthSlice.reducer, counter: counterSlice.reducer},
});

const subscriberFunction = () => {
  const latestStore = store.getState();
  console.log(latestStore);
};
store.subscribe(subscriberFunction);

// store.dispatch({ type: "increment" });
// store.dispatch({ type: "decrement" });
// store.dispatch({ type: "increase" });

export default store;
export const counterAction = counterSlice.actions;
export const AuthAction = AuthSlice.actions;
