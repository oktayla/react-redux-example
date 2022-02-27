import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const login = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Zelensky')
    }, 1000)
})

export const loginAction = createAsyncThunk('auth/login', async () => {
    return await login()
})

const auth = createSlice({
    name: 'auth',
    initialState: 'Guest',
    extraReducers: (builder) => builder.addCase(loginAction.fulfilled, (state, action) => {
        return state = action.payload
    }) 
})

export default auth.reducer