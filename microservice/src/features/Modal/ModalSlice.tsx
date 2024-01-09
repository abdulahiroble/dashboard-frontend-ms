import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ModalState {
    isModalOpen: boolean;
    ferretConnectedness: any;
    loadflow: any;
}


const initialState: ModalState = {
    isModalOpen: false,
    ferretConnectedness: null,
    loadflow: null,
}

export const modalSlice = createSlice({
    name: 'chart',
    initialState,
    reducers: {
        setIsModalOpen: (state, action: PayloadAction<boolean>) => {
            state.isModalOpen = action.payload;
        },
        setFerretConnectedness: (state, action: PayloadAction<any>) => {
            state.ferretConnectedness = action.payload;
        },
        setLoadflow: (state, action: PayloadAction<any>) => {
            state.loadflow = action.payload;
        }
    }
})

export const { setIsModalOpen, setFerretConnectedness, setLoadflow } = modalSlice.actions

export default modalSlice.reducer