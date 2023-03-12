import { useSelector } from 'react-redux';
import { getFloorText } from './Utils'


import styles from './Styles.module.css'
const FloorNumbers = () => {

    const numOfFloors = useSelector (state => state.numOfFloors);
    
    const floorNumbers = [...Array(numOfFloors)].map((_,i) => {
        const floorNumber = numOfFloors-i-1;
        const text = getFloorText(floorNumber);
        return (
            <div className={styles.floorNumbers} key={i}>
                <h3>{text}</h3>
            </div>
        )
    });
    return (
        <div className={styles.container}>
            {floorNumbers}
        </div>
    );
}

export default FloorNumbers;