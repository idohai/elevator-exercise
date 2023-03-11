
 export const findClosestElevator = (floor, elevatorPosition) => {
    let closestIndex = -1;
    let minDistance = Infinity;
    elevatorPosition.filter(pos => pos !== -1).forEach((position, index) => {
        const distance = Math.abs(floor - position)
        if (distance < minDistance) {
            minDistance = distance;
            closestIndex = index
        }
    })
    return closestIndex;
}

