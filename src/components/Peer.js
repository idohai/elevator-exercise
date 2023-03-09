import { React, useState } from 'react';
import SvgElevator from "./Elevator/SvgElevator";
import styles from "./Peer.module.css";

const Peer = ({ numOfFloors }) => {
    const [isIdle, setIsIdle] = useState(true);
    const [elevatorPosition, setElevatorPosition] = useState(numOfFloors-1)

    return (
        <div className={styles.container}>
            {[...Array(numOfFloors)].map((_, i) => (
                <div className={`${styles.square} ${i===numOfFloors-1 ? styles.bottom : ''}`} key={i}>
                    {i === numOfFloors-1 && <SvgElevator className={styles.elevator} fill={isIdle ? 'black' : 'red'}/>}
                </div>
            ))}
        </div>
    )
}

export default Peer;