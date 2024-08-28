import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import localStorage from 'redux-persist/lib/storage' 
import shoppingCartSlice from "./features/slices/shoppingCartSlice"
import menuSlice from './features/slices/menuSlice'
import StaticImagesSlice from './features/slices/StaticImagesSlice'
import UsersSlice from './features/slices/UsersSlice'
import AdminSlice from './features/slices/AdminSlice'


const configuration = {
  key : "globalStorage" ,
  storage:localStorage
}

const rootReducer = combineReducers({
  shoppingReducer:shoppingCartSlice,
  menuReducer:menuSlice,
  staticImagesReducer:StaticImagesSlice,
  userReducer:UsersSlice,
  adminReducer:AdminSlice
})

const persistableReducer = persistReducer(configuration , rootReducer)

export const store = configureStore ({
  reducer : persistableReducer
})

export const persistor = persistStore(store)

