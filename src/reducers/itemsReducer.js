import {createSlice} from '@reduxjs/toolkit';


const itemmsReducer = createSlice({
    name: 'items',
    initialState: {
        data: [],
    },
    reducers: {
        setItems(state, action) {
            state.data = action.payload
        },
    }

})

export default itemmsReducer.reducer;
export const {setItems} = itemmsReducer.actions;
