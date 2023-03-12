
 export const findClosestElevator = (floor, elevatorPosition) => {
    let closestIndex = -1;
    let minDistance = Infinity;
    elevatorPosition.filter(pos => pos !== -1).forEach((position, index) => {
        const distance = Math.abs(floor - position);
        if (distance < minDistance) {
            minDistance = distance;
            closestIndex = index;
        }
    });
    return closestIndex;
}

export const getFloorText = (floorNumber) => {
    if (floorNumber === 0) {
        return 'Ground Floor';
    } else if (floorNumber === 1) {
        return '1st';
    } else if (floorNumber === 2) {
        return '2nd';
    } else {
        return `${floorNumber}th`;
    }
}