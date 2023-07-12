import {createSlice} from '@reduxjs/toolkit';


const itemmsReducer = createSlice({
    name: 'items',
    initialState: {
        data: [],
        loading: false
    },
    reducers: {
        setItems(state, action) {
            state.data = action.payload
            state.loading = true
        },
    }

})

export default itemmsReducer.reducer;
export const {setItems} = itemmsReducer.actions;
