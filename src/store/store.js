import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = {
    numOfElevators: 5,
    numOfFloors: 10,
    elevatorsPosition: Array(5).fill(0),
    targetQueue: [],
    buttonsState: Array(10).fill(false),
    occupied: false
}

const elevatorSlice = createSlice({
    name: 'elevatorSystem',
    initialState,
    reducers: {
        initialize(state, action) {
            state.numOfElevators = parseInt(action.payload.numOfElevators);
            state.numOfFloors = parseInt(action.payload.numOfFloors);
            state.elevatorsPosition = Array(state.numOfElevators).fill(0);
            state.buttonsState = Array(state.numOfFloors).fill(false);
        },
        callElevator(state, action) {
            state.targetQueue.push(action.payload);
        },
        popQueue(state) {
            state.targetQueue.shift();
        },
        deactivateElevator(state, action) {
            state.elevatorsPosition[action.payload] = Infinity;
        },
        activateElevator(state, action) {
            state.elevatorsPosition[action.payload.elevatorId] = action.payload.elevatorPosition;
            state.buttonsState[action.payload.elevatorPosition] = false;
            if (state.occupied) {
                state.occupied = false;
            }
        },
        setButtonAsArrived(state, action) {
            state.buttonsState[action.payload] = true;
        },
        allOccupied(state) {
            state.occupied = true;
        }     
    }
})

const store = configureStore({
    reducer: elevatorSlice.reducer
});

export const elevatorActions = elevatorSlice.actions;
export default store;