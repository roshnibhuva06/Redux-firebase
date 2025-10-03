import { configureStore } from '@reduxjs/toolkit'
import chatReducer from '../features/chatslice'
import authReducer from './features/authslice'
// import authReducer from  features/authslice'

const store = configureStore({
    reducer: {
        chat: chatReducer,
        auth: authReducer
    }
})

export default store