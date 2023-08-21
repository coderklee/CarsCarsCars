import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        year: 'Vehicle Year',
        make: 'Vehicle Make',
        model: 'Vehicle Model',
        type: 'New or Used?',
        price: 'Listing Price',
    },
    reducers: {
        chooseYear: (state, action) => { state.year = action.payload },
        chooseMake: (state, action) => { state.make = action.payload },
        chooseModel: (state, action) => { state.model = action.payload },
        chooseType: (state, action) => { state.type = action.payload },
        choosePrice: (state, action) => { state.price = action.payload },
    }
})

export const reducer = rootSlice.reducer;
export const { chooseYear, chooseMake, chooseModel, chooseType, choosePrice } = rootSlice.actions