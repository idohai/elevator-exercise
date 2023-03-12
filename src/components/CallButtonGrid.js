import { React, useRef, createRef } from 'react'
import { useSelector } from 'react-redux';

import CallButton from './CallButton';
import styles from "./Styles.module.css";


const CallButtonGrid = () => {

    const numOfFloors = useSelector (state => state.numOfFloors);
    
    const buttonRefs = useRef([]);
    buttonRefs.current = [...Array(numOfFloors)].map((_,i) => buttonRefs.current[i] ?? createRef());

    const buttons = [...Array(numOfFloors)].map((_, i) => (
        <div className={styles.buttonSquare} key={numOfFloors-i-1}>
            <CallButton buttonId={numOfFloors-1-i} ref={buttonRefs.current[i]}
            />
        </div>
    ));

    return (
        <div className={styles.container}>
            {buttons}
        </div>
    );
}

export default CallButtonGrid;