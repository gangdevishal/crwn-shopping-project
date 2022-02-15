import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import userReducer from "./user/user.reducer";
import  storage  from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { directoryReducer } from "./directory/directory.reducer";
import { itemCollectionReducer } from "./shop-item-collection/shop-item-collection.reducer";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory:directoryReducer,
  collections:itemCollectionReducer,
});

export default persistReducer(persistConfig, rootReducer);
