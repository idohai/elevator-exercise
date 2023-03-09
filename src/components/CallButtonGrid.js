import { Button } from '@mui/material';
import styles from "./Peer.module.css";


const CallButtonGrid = ({ numOfFloors }) => {
    
    const callElevator = (floor) => {
        return(floor)

    }

    return (
        <div className={styles.container}>
            {[...Array(numOfFloors)].map((_, i) => (
                <div className={styles.buttonSquare} key={numOfFloors-i-1}>
                    <Button variant='contained' color='success' onClick={callElevator(numOfFloors-i-1)}>Call({numOfFloors-i-1})</Button>
                </div>
            ))}
        </div>
    )
}

export default CallButtonGrid;