import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartReducer from "@/slices/cartSlice"
import cartCounterReducer from '@/slices/cartCounterSlice';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  cart: cartReducer,
  counter: cartCounterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer:  persistedReducer
});

export const persistor = persistStore(store);

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
