import {createSlice} from '@reduxjs/toolkit';


const cartItemsReducer = createSlice({
    name: 'cart',
    initialState: {
        data: [],
        count: 0,
        total: 0,
    },
    reducers: {
        addCartItems(state, action) {
            state.data.push(action.payload)
            state.total += action.payload.count * action.payload.price
            state.count ++
        },
        incrementCountItem(state, action) {
            state.data.find(item => item.id === action.payload).count += 1
            state.total += state.data.find(item => item.id === action.payload).price
        },
        decrementCountItem(state, action) {
            state.data.find(item => item.id === action.payload).count -= 1
            state.total -= state.data.find(item => item.id === action.payload).price
        },
    }

})

export default cartItemsReducer.reducer;
export const {addCartItems, incrementCountItem, decrementCountItem} = cartItemsReducer.actions;
