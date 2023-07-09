import {createSlice} from '@reduxjs/toolkit';


const itemmsReducer = createSlice({
    name: 'items',
    initialState: {
        items: [],
    },
    reducers: {
        setItems(state, action) {
            state.items = action.payload
        },
    }

})

export default itemmsReducer.reducer;
export const {setItems} = itemmsReducer.actions;
