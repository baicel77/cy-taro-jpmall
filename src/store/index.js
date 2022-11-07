import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './modules/home'

const store = configureStore({
    // 合并reducer
    reducer: {
      home: homeReducer
    },
    // 默认启用 react dev-tools
    devTools: true
})

export default store
