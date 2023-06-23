import toolkit from "@reduxjs/toolkit";

const { configureStore, createAction, createReducer } = toolkit;

const addToCart = createAction("ADD_TO_CART");

const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

const login = createAction("CREATE_SESSION");

const loginReducer = createReducer({ status: false }, (builder) => {
  builder.addCase(login, (state) => {
    state.status = true;
  });
});

const store = configureStore({
  reducer: {
    cart: cartReducer,
    login: loginReducer,
  },
});
console.log("create store :", store.getState());

// subscribe = buat mantau prubahannya
store.subscribe(() => {
  console.log("STORE CHANGE :", store.getState());
});

// action/dispatch
const action = { type: "ADD_TO_CART", payload: { id: 1, qty: 5 } };
store.dispatch(action);
// cara kedua
store.dispatch(addToCart({ id: 2, qty: 8 }));

store.dispatch(login());
