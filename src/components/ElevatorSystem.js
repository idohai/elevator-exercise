import { React, useEffect, useRef, createRef } from 'react'
import { Grid } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

import { elevatorActions } from '../store/store'

import Peer from './Peer'
import CallButtonGrid from './CallButtonGrid'
import { findClosestElevator } from './Utils';

const ElevatorSystem = () => {
    
    const containerStyles = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e5e5e5",
    }

    const numOfElevators = useSelector(state => state.numOfElevators);
    const elevatorsPosition = useSelector(state => state.elevatorsPosition)
    const targetQueue = useSelector(state => state.targetQueue);

    const dispatch = useDispatch();
    const peerRefs = useRef([]);
    peerRefs.current = [...Array(numOfElevators)].map((_,i) => peerRefs.current[i] ?? createRef());

    useEffect(() => {
        if (targetQueue.length !== 0) {
            const target = targetQueue[0]
            const closestElevator = findClosestElevator(target, elevatorsPosition);
            if (closestElevator === -1) {
                alert('All elevators are occupied. action will soon take place');
                //need to think how to solve this.
            }
            else {
                dispatch(elevatorActions.popQueue()); //remove the target floor from targetQueue.
                const closestPeer = peerRefs.current[closestElevator].current;
                closestPeer.moveToFloor(target); //send the closest elevator to target floor.

            }
        }
        
    },[targetQueue])
    
    const peers = [...Array(numOfElevators)].map((_,i) => (
        <Grid item key={i}>
            <Peer elevatorId={i} ref={peerRefs.current[i]}/>
        </Grid>
    ));

    return (
        <>
            {peers}
        </>
    )
}

export default ElevatorSystem;