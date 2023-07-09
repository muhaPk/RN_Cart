import {createSlice} from '@reduxjs/toolkit';


const cardItemsReducer = createSlice({
    name: 'card',
    initialState: {
        data: [],
    },
    reducers: {
        addCardItems(state, action) {
            state.data.push(action.payload)
        },
        removeCardItem(state, action) {
            const i = state.data.findIndex(item => item.id === action.payload)
            state.data.splice(i, 1)
        },
    }

})

export default cardItemsReducer.reducer;
export const {addCardItems, removeCardItem} = cardItemsReducer.actions;
