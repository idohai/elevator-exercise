import { React, useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { elevatorActions } from '../store/store'

import SvgElevator from "./Elevator/SvgElevator";
import styles from "./Peer.module.css";
import ding from '../assests/elevator-ding-at-arenco-tower-dubai.mp3'


const Peer = forwardRef((props, ref) => {

    const numOfFloors = useSelector(state => state.numOfFloors);
    const dispatch = useDispatch();

    const { elevatorId } = props;
    const [isIdle, setIsIdle] = useState(true);
    const [elevatorPosition, setElevatorPosition] = useState(0)
    const [color, setColor] = useState('black')
    const [animationEnd, setAnimationEnd] = useState(false);
    const [style, setStyle] = useState({
        '--target-floor': 0,
        '--elevator-position': 0,
        '--elevator-step': 0
    })

    const audio = new Audio(ding);


    const moveToFloor = (targetFloor) => {

        dispatch(elevatorActions.deactivateElevator(elevatorId)) // set global elevator position state to INF.
                
        setElevatorPosition(targetFloor); // set elevator position to the current floor.
        setStyle({
            '--target-floor': targetFloor,
            '--elevator-position': elevatorPosition,
            '--elevator-step': targetFloor-elevatorPosition
        })        
        setColor('red');

        setIsIdle(false); //fire up the animation.
    }
    
    useEffect( () => {
        if (animationEnd){

            setStyle({
                '--target-floor': elevatorPosition,
                '--elevator-position': elevatorPosition,
                '--elevator-step': 0,
            })
            setColor('green');
            setIsIdle(true);
            audio.play();
            dispatch(elevatorActions.setButtonAsArrived(elevatorPosition));
        }
        else {
            setTimeout(() => {
                setColor('black');
                dispatch(elevatorActions.activateElevator({elevatorId, elevatorPosition}));
            }, 2000);
        }
        setAnimationEnd(false);
    }, [animationEnd])
    

    useImperativeHandle(ref, () => ({
        moveToFloor: (targetFloor) => moveToFloor(targetFloor)
    }));

    return (
        <div className={styles.container}>
            {[...Array(numOfFloors)].map((_, i) => (
                <div className={`${styles.square}`} key={i}>
                    {i === numOfFloors-1 && 
                    <SvgElevator className={`${styles.elevator} ${!isIdle && styles.moving}`}
                    style={style}
                    fill={color}
                    onAnimationEnd={() => setAnimationEnd(true)}
                    />}
                </div>
            ))}
        </div>
    )
});

export default Peer;