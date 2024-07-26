import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import localStorage from 'redux-persist/lib/storage' 
import CounterSlice from "./features/slices/CounterSlice" 
import shoppingCartSlice from "./features/slices/shoppingCartSlice"
import menuSlice from './features/slices/menuSlice'
import StaticImagesSlice from './features/slices/StaticImagesSlice'


const configuration = {
  key : "globalStorage" ,
  storage:localStorage
}

const rootReducer = combineReducers({
  counterReducer:CounterSlice,
  shoppingReducer:shoppingCartSlice,
  menuReducer:menuSlice,
  staticImagesReducer:StaticImagesSlice
})

const persistableReducer = persistReducer(configuration , rootReducer)

export const store = configureStore ({
  reducer : persistableReducer
})

export const persistor = persistStore(store)

