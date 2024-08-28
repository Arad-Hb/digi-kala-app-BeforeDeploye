
const { createSlice } = require("@reduxjs/toolkit")

const INITIAL_STATE = {admin:{},isLogedIn:false,usersCount:0,productsCount:0}
const AdminSlice = createSlice({
    name: 'AdminSlice',
    initialState: INITIAL_STATE,
    reducers: {
    
        setAdminIsLogedIn(state,action) {
            state.admin = action.payload
            state.isLogedIn=true
        },
        setAdminIsLogedOut(state) {
            state.admin = {}
            state.isLogedIn=false
        },
        setUsersCount(state,action){
            state.usersCount=action.payload
        },
        setProductsCount(state,action){
           state.productsCount=action.payload
        }

    }
})

export const { setAdminIsLogedIn,setAdminIsLogedOut,setUsersCount,setProductsCount} = AdminSlice.actions
export default AdminSlice.reducer