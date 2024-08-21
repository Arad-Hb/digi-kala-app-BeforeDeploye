const { createSlice } = require("@reduxjs/toolkit")

const INITIAL_STATE = {user:{}}
const UsersSlice = createSlice({
    name: 'UsersSlice',
    initialState: INITIAL_STATE,
    reducers: {
        removeUserData(state) {
            state.user = {}
        },
        setUserData(state,action) {
            state.user = action.payload
        }

    }
})

export const { removeUserData,setUserData} = UsersSlice.actions
export default UsersSlice.reducer