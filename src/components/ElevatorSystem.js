import { React, useEffect, useRef, createRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Peer from './Elevator/Peer'
import { elevatorActions } from '../store/store'
import { findClosestElevator } from './Utils';

const ElevatorSystem = () => {
    
    const numOfElevators = useSelector(state => state.numOfElevators);
    const elevatorsPosition = useSelector(state => state.elevatorsPosition);
    const targetQueue = useSelector(state => state.targetQueue);

    const dispatch = useDispatch();
    const peerRefs = useRef([]);
    peerRefs.current = [...Array(numOfElevators)].map((_,i) => peerRefs.current[i] ?? createRef());

    /* find closest elevator and dispatch to target. */
    useEffect(() => {
        if (targetQueue.length !== 0) {
            const target = targetQueue[0];
            const closestElevator = findClosestElevator(target, elevatorsPosition);
            if (closestElevator === -1) { //all elevator are occupied
                // do nothing
                // when elevator will finish a job, elevatorsPosition will update and this function will execute again.
            }
            else {
                dispatch(elevatorActions.popQueue());
                const closestPeer = peerRefs.current[closestElevator].current;
                closestPeer.moveToFloor(target); //send the closest elevator to target floor.

            }
        }  
    },[targetQueue, elevatorsPosition, dispatch]);
    
    /* render peers */
    const peers = [...Array(numOfElevators)].map((_,i) => (
        <Grid item key={i}>
            <Peer elevatorId={i} ref={peerRefs.current[i]}/>
        </Grid>
    ));

    return (
        <Box sx={{display: 'flex', flexDirection: 'row'}}>
            {peers}
        </Box>
    );
}

export default ElevatorSystem;